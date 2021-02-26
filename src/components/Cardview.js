import React from 'react';
import {Link} from "react-router-dom";

import styled from "styled-components";

const CardView = styled.div`
  background-color: darkgray;
`

const Cardview = ({title, author, overview}) => {
    return (
        <CardView className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
                <p className="card-text">{overview.slice(0, 100)}</p>
                <Link to="#" className="card-link">Card link</Link>
                <Link to="#" className="card-link">Another link</Link>
            </div>
        </CardView>
    );
};

export default Cardview;
