import {SlOptionsVertical} from 'react-icons/sl';
import {useNavigate} from "react-router-dom";
import Header from "./pages/header/Header";

export default function ListPages({data, title, loading}) {
    const navigate = useNavigate();
    const errorHandler = (event) => {
        event.currentTarget.src = 'https://img.icons8.com/ios/50/null/user-male-circle.png';
        event.currentTarget.className = 'error';
    }

    return (<>
        <div className='list'>
            <Header title={title}/>
            {
                loading ?
                    <>
                        <div className="lds-roller">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </>
                    :
                    <div className='container'>
                        {data.map((item) => <div key={item.pageId} className='list-pages'
                                                 onClick={() => navigate(`/detail/${item.instagramId}`)}>
                            <div className='left'>
                                <img className='profile' src={item.profilePicUrl}
                                     onError={errorHandler} alt=""/>
                                <div className='userid'>
                                    <div className='instagram-id'>@{item.instagramId}</div>
                                    <div className='full-name'>{item.fullName}</div>
                                </div>
                            </div>
                            <div className='right'>
                                <div className='category'>
                                    <div
                                        className={item.parenIconUrl !== null && item.parentCategory !== null ? 'active' : 'none'}>
                                        <img src={item.parentIconUrl} alt=""/>
                                        <span className='parent-category'> {item.parentCategory}</span>
                                    </div>
                                    <div
                                        className={item.category === null || item.category === "" ? 'none' : 'active'}>
                                <span>
                                     {item.category}
                                </span>

                                    </div>
                                </div>
                                <div className='category-icon'>
                                    <SlOptionsVertical size={16}/>
                                </div>
                            </div>
                        </div>)}
                    </div>
            }
        </div>
    </>);
}