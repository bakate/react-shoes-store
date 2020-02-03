import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoo.png';
import CartLink from './Cart/CartLink';
import { UserContext } from '../context/user';
import LoginLink from './LoginLink';

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <header className="header">
      <img src={logo} alt="vintage tech logo" className="logo" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">Nous</Link>
            </li>
            <li>
              <Link to="/products">Articles</Link>
            </li>
            {user && user.token && (
              <li>
                <Link to="/commander">Commander</Link>
              </li>
            )}
          </div>
          <div>
            <LoginLink />
            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  );
}
