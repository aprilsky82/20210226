import React , {useState, useEffect} from 'react';
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 10px;
`

const Grid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 25px;
`

const Cardview = styled.div`
  background-color: darkgray;
`

const List = styled.ul`
  background-color: darkgray;
`

const Item = styled.li`
  color: black;
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
                    <Cardview className="card">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.overview.slice(0, 100)}</p>
                            </div>
                            <List className="list-group list-group-flush">
                                <Item className="list-group-item">{movie.release_date}</Item>
                                <Item className="list-group-item">{movie.vote_average} / 10</Item>
                                <Item className="list-group-item">Language : {movie.original_language}</Item>
                            </List>
                    </Cardview>
                ))}

            </Grid>
        </Container>
    );
};

export default Members;
