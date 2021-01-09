import React from 'react';
import { useHistory } from 'react-router-dom';

import './NavbarLogo.scss';
import logo from '../../assets/logo.svg';

export interface NavbarLogoProps {
  pathname: string;
  width?: string;
}

const NavbarLogo = (props: NavbarLogoProps) => {
  const history = useHistory();
  const { pathname, width = '30px' } = props;

  function handleLogoClick() {
    if (pathname === '/') {
      history.push('/collections');
    } else {
      history.push('/');
    }
  }

  return <img className="NavbarLogo" src={logo} alt="logo" width={width} onClick={() => handleLogoClick()} />;
};

export default NavbarLogo;
