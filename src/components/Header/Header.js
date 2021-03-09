import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to ="/home" className="navbar-brand" >Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/posts">Post</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/feature">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/comment">Comments</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;