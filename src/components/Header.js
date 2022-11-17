import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Rockets from './Rockets';
import Missions from './Missions';
import MyProfile from './MyProfile';
import logo from '../images/space-x.svg';
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
        <img src={logo} alt="logo" />
        <h1 className="title"> Space Travelers Hub </h1>
        <ul className="nav-ul">
          <li><Link onClick={underLine} className="link" to="/"> Rockets </Link></li>
          <li><Link onClick={underLine} className="link" to="/Missions"> Missions </Link></li>
          <li><Link onClick={underLine} className="link" to="/MyProfile"> My Profile </Link></li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
      <Route path="/MyProfile" element={<MyProfile />} />
    </Routes>
  </div>
);

export default Header;
