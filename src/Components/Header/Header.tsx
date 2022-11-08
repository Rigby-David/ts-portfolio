import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-container">
      <div className="hamburger">
        <Hamburger
          toggled={isOpen} 
          toggle={setIsOpen}
        />
      </div>
      <div className={isOpen ? 'header' : 'expanded-header'}>
        <NavLink to="*">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
}
