import React , {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components';
import Cardview from "../components/Cardview";

const Container = styled.div`
    padding: 0px 10px;
`

const Grid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 25px;
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
                    <Cardview
                        title={item.title}
                        author={item.author_name}
                        overview={item.overview}
                    />
                ))}
            </Grid>
        </Container>
    );
};

export default Main;
