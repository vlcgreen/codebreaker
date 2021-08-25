import React from 'react';
import {Link} from 'react-router-dom';

const BaseLayout = (props) => {
  return (
    <>
      <ul>
          <li>
              <Link to="/">Landing Page</Link>
          </li>
          {/* <li>
              <Link to="/hooks">Hooks Page</Link>
          </li>
          <li>
              <Link to="/classes">Classes Page</Link>
          </li> */}
          <li>
              <Link to="/game">Let's Game</Link>
          </li>
          <li>
              <Link to="/scores">Leaderboard</Link>
          </li>
      </ul>

      {props.children}
    </>
  )
}

export default BaseLayout
