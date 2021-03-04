import React from 'react';
import styled from "styled-components";

const Cardview = styled.div`
  background-color: white;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.1);
`

const List = styled.ul`
  background-color: white;
`

const Item = styled.li`
  color: #333333;
`

const Title = styled.h5`
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  padding-bottom: 3%;
`

const ImageCard = ({poster, title, overview, date, vote, lan}) => {
    return (
        <Cardview className="card">
            <img src={`https://image.tmdb.org/t/p/w500${poster}`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <Title className="card-title">{title}</Title>
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
