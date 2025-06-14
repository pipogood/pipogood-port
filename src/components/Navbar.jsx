import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleResume = () => {
    const resumeUrl = '/pipogood-port/CV_Suparach Intarasopa.pdf';
    window.open(resumeUrl, '_blank');
  };

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (id) => {
    if (location.pathname === '/' || location.hash === '#/') {
      scrollToSection(id);
    } else {
      navigate('/');
      // Delay scroll until after navigation completes
      setTimeout(() => scrollToSection(id), 200);
    }
  };

  const renderNavLinks = (isSecondary) => (
    <ul
      className={`list-none ${
        isSecondary ? 'flex sm:hidden' : 'hidden sm:flex'
      } flex-row gap-6`}
    >
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : isSecondary ? 'text-secondary' : 'text-white'
          } hover:text-white text-[16px] font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            handleNavClick(link.id);
            if (isSecondary) setToggle(false);
          }}
        >
          {link.title}
        </li>
      ))}
      <li
        className={`text-${isSecondary ? 'secondary' : 'white'} hover:text-white text-[16px] font-medium cursor-pointer`}
      >
        <button onClick={toggleResume}>CV</button>
      </li>
    </ul>
  );

  return (
    <nav className={`${styles.paddingX} bg-black w-full flex items-center fixed py-4 top-0 z-20`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo + Name + Email */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain rounded-md" />
          <div className="flex flex-col leading-tight text-white">
            <span className="font-bold text-[18px]">Suparach Intarasopa</span>
            <span className="text-[14px] text-white-500">(suparach.int@gmail.com)</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        {renderNavLinks(false)}

        {/* Mobile Nav */}
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[18px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`p-4 black-gradient absolute top-14 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl foggy-glass bg-black ${
              toggle ? 'flex' : 'hidden'
            }`}
          >
            {renderNavLinks(true)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


