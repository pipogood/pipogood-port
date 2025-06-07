import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    const resumeUrl = '/pipogood-port/CV_Suparach Intarasopa.pdf';
    window.open(resumeUrl, '_blank');
  };

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

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
            if (isSecondary) setToggle(false);
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
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
  <nav className={`${styles.paddingX} bg-black w-full fixed top-0 z-50 py-4`}>
    <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
      {/* Left: Logo + Name + Email */}
      <Link
        to="/"
        className="flex items-center gap-4"
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} alt="logo" className="w-10 h-10 object-contain rounded-md" />
        <div className="flex flex-col text-white leading-tight">
          <span className="font-bold text-[18px]">Suparach Intarasopa</span>
          <span className="text-sm text-gray-400">(suparach.int@gmail.com)</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex gap-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActive(link.title)}
            className={`${
              active === link.title ? 'text-white' : 'text-gray-300'
            } text-[16px] font-medium hover:text-white transition`}
          >
            {link.title}
          </a>
        ))}
        <button
          onClick={toggleResume}
          className="text-[16px] font-medium text-gray-300 hover:text-white transition"
        >
          CV
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[18px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        {/* Mobile Dropdown */}
        <div
          className={`p-4 black-gradient absolute top-16 right-4 min-w-[140px] z-10 rounded-xl foggy-glass ${
            toggle ? 'flex flex-col gap-4' : 'hidden'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActive(link.title);
                setToggle(false);
              }}
              className="text-white text-[16px] font-medium"
            >
              {link.title}
            </a>
          ))}
          <button onClick={toggleResume} className="text-white text-[16px] font-medium">
            CV
          </button>
        </div>
      </div>
    </div>
  </nav>

  );
};

export default Navbar;

