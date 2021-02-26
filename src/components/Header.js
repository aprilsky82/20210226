import React from 'react';

const Header = () => {
    return (
        <header>
          <ul>
              <li>
                  <a href="/">Main page</a>
              </li>
              <li>
                  <a href="/members">Members page</a>
              </li>
              <li>
                  <a href="/groups">Groups page</a>
              </li>
              <li>
                  <a href="/mypage">My page</a>
              </li>
          </ul>
        </header>

    );
};

export default Header;
