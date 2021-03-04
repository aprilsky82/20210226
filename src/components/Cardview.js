import React from 'react';
import {Link} from "react-router-dom";

import styled from "styled-components";

const CardView = styled.div`
  background-color: white;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.1);
`

const Title = styled.h5`
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  padding-bottom: 3%;
`

const LinkCss = styled.link`
  font-size: 10px;
  font-weight: 100;
  color: darkgray;
  padding-bottom: 3%;
`
햐
const Cardview = ({title, release_date, overview}) => {
    return (
        <CardView className="card">
            <div className="card-body">
                <Title className="card-title">{title}</Title>
                <h6 className="card-subtitle mb-2 text-muted">{release_date}</h6>
                <br />
                <p className="card-text">{overview.slice(0, 150)}</p>
                <br />
                <Link to="#" className="card-link">Card link</Link>
                <Link to="#" className="card-link">Another link</Link>
            </div>
        </CardView>
    );
};

export default Cardview;
