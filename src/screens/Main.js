import React , {useState, useEffect} from 'react';
import axios from 'axios'


const Main = () => {

    const [news, setNews] = useState([])
    const getdata = async () => {
       await axios
            .get("http://www.findyourapi.com/api/posts/")
            // .then(res => console.log(">>>>>>", res))
            .then(res => setNews(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <div>
            <h1>{news.length}</h1>

            {/*<button type={"button"} onClick={getdata}>click</button>*/}
        </div>
    );
};

export default Main;
