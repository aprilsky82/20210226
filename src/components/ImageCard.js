import React from 'react';
import styled from "styled-components";

const Cardview = styled.div`
  background-color: darkgray;
`

const List = styled.ul`
  background-color: darkgray;
`

const Item = styled.li`
  color: black;
`

const ImageCard = ({poster, title, overview, date, vote, lan}) => {
    return (
        <Cardview className="card">
            <img src={`https://image.tmdb.org/t/p/w500${poster}`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{overview.slice(0, 100)}</p>
            </div>
            <List className="list-group list-group-flush">
                <Item className="list-group-item">{date}</Item>
                <Item className="list-group-item">{vote} / 10</Item>
                <Item className="list-group-item">Language : {lan}</Item>
            </List>
        </Cardview>
    );
};

export default ImageCard;
