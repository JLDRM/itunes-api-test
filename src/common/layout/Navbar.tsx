import React from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import Container from '../../components/container/Container';
import Grid from '../../components/grid/Grid';
import IonSearchBar from '../../components/ion-search-bar/IonSearchBar';
import LikesCounter from '../../components/likes-counter/LikesCounter';
import NavbarLogo from '../../components/navbar-logo/NavbarLogo';
import './Navbar.scss';

function Navbar() {
  const { pathname } = useLocation();

  return (
    <>
      <Container className={clsx('Navbar', { collections: pathname === '/collections' })}>
        <Grid container justifyContent="space-between" alignItems="center" maxHeight>
          <Grid item>
            <NavbarLogo pathname={pathname} />
          </Grid>
          <Grid item>
            <IonSearchBar pathname={pathname} />
          </Grid>
          <Grid item>
            <LikesCounter pathname={pathname} />
          </Grid>
        </Grid>
      </Container>
      <div className="fixed-position-offset"></div>
    </>
  );
}

export default Navbar;
