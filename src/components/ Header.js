import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Book Tracking App </h1>
      <hr />
      <div className="links">
       <NavLink to="/" className="link" activeClassName="active">
          Sign Up
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Book
        </NavLink>
        <NavLink to="/booklist" className="link" activeClassName="active" exact>
          Book List
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
