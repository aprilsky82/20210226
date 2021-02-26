import React , {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Container = styled.div`
    padding: 0px 10px;
`

const Grid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 25px;
`

const CardView = styled.div`
    background-color: darkgray;
`

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
        <Container>
            <Grid>
                {news.map(item => (
                    <CardView className="card">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{item.author_name}</h6>
                            <p className="card-text">{item.overview.slice(0, 100)}</p>
                            <Link to="#" className="card-link">Card link</Link>
                            <Link to="#" className="card-link">Another link</Link>
                        </div>
                    </CardView>
                ))}
            </Grid>
        </Container>
    );
};

export default Main;
