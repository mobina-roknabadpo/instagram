import service from "../../../services/Service";
import {useState, useEffect} from "react";
import Service from "../../../services/Service";
import ListPages from "../ListPages";

export default function Pages(){
    const [engaged, setEngaged] = useState([]);
    const [followers, setFollowers] = useState([]);
    useEffect(() => {
        loadPages();
    }, [])

    const loadPages = async () => {
        const result = await Service.getTopEngaged();
        const result2 = await service.getTopFollowers();
        console.log(result);
        setEngaged(result);
        setFollowers(result2)
    }

    return(
        <>
            <div className='list-pages'>
                <div>
                    <ListPages data={engaged}/>
                </div>
                <div>
                    <ListPages data={followers}/>
                </div>
            </div>
        </>
    );

}