import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Rockets from './Rockets';
import Missions from './Missions';
import MyProfile from './MyProfile';
import logo from './images/planet.png';
import Dragons from './Dragons';
import './Header.css';

const underLine = (e) => {
  if (e.target.classList.contains('link')) {
    const links = document.querySelectorAll('.link');
    links.forEach((link) => link.classList.remove('active'));
    e.target.classList.add('active');
  }
};

const Header = () => (
  <div>
    <nav className="header-nav">
      <div className="header">
        <ul className="nav-ul">
          <div className="left-side">
            <img className="logo-img" src={logo} alt="planet-logo" />
            <h1 className="title"> Space Travelers Hub </h1>
          </div>
          <li className="right-side">
            <Link onClick={underLine} className="link" to="/"> Rockets </Link>
            <Link onClick={underLine} className="link" to="/dragons">Dragons</Link>
            <Link onClick={underLine} className="link" to="/Missions"> Missions </Link>
            <Link onClick={underLine} className="link" to="/MyProfile"> My Profile </Link>
            <Link onClick={underLine} className="link" to="/dragons">Dragons</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/dragons" element={<Dragons />} />
      <Route path="/Missions" element={<Missions />} />
      <Route path="/MyProfile" element={<MyProfile />} />
    </Routes>
  </div>
);

export default Header;
