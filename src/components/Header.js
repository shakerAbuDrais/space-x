import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Rockets from './Rockets';

const Header = () => (
  <div>
    <nav className="header-nav">
      <div className="header">
        <h1 className="title"> Space Travelers Hub </h1>
        <ul className="nav-ul">
          <li>
            <Link to="/"> Rockets </Link>
          </li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Rockets />} />
    </Routes>
  </div>
);

export default Header;
