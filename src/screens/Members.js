import React , {useState, useEffect} from 'react';
import axios from "axios";
import styled from "styled-components";
import ImageCard from "../components/ImageCard";

const Container = styled.div`
    padding: 0px 10px;
`

const Grid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 25px;
`



const Members = () => {

    const [movies, setMovies] = useState([])
    const getdata = async () => {
        await axios
            .get("https://api.themoviedb.org/3/movie/popular?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
            // .then(res => console.log(">>>>", res.data.results))
            .then(res => setMovies(res.data.results))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <Container>
            <Grid>
                {movies.map(movie => (
                    <ImageCard
                        overview={movie.overview}
                        title={movie.title}
                        poster={movie.poster_path}
                        date={movie.release_date}
                        vote={movie.vote_average}
                        lan={movie.original_language}
                    />
                ))}

            </Grid>
        </Container>
    );
};

export default Members;
