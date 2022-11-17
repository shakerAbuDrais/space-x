import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Rockets from './Rockets';
import MyProfile from './MyProfile';
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
        <h1 className="title"> Space Travelers Hub </h1>
        <ul className="nav-ul">
          <li>
            <Link onClick={underLine} className="link" to="/"> Rockets </Link>
            <Link onClick={underLine} className="link" to="/MyProfile"> My Profile </Link>
            <Link onclick={underLine} className="link" to="/dragons">Dragons</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/dragons" element={<Dragons />} />
    </Routes>
  </div>
);

export default Header;
