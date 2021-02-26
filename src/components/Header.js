import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
          <ul>
              <li>
                  <Link to="/">Main page</Link>
              </li>
              <li>
                  <Link to="/members">Members page</Link>
              </li>
              <li>
                  <Link to="/groups">Groups page</Link>
              </li>
              <li>
                  <Link to="/mypage">My page</Link>
              </li>
          </ul>
        </header>

    );
};

export default Header;
