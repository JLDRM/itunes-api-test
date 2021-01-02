import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <>
      <p>Home works</p>
      <ul>
        <li>
          <Link to={`redux`}>Go to learn redux</Link>
        </li>
        <li>
          <Link to={`artist-detail/89999`}>Go to artist detail</Link>
        </li>
      </ul>
    </>
  );

};

export default Home;