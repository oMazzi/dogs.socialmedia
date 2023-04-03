import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg';
import { ReactComponent as Post } from '../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';
import useMedia from '../../Hooks/useMedia';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 720px)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${mobileMenu &&
            styles.mobileButtonActive}`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu &&
          styles.navMobileActive}`}
      >
        <NavLink to="/myaccount" end>
          <MyPhotos />
          {mobile && 'My photos'}
        </NavLink>
        <NavLink to="/myaccount/stats">
          <Stats />
          {mobile && 'Statistics'}
        </NavLink>
        <NavLink to="/myaccount/post">
          <Post />
          {mobile && 'Add photo'}
        </NavLink>
        <button onClick={userLogout}>
          <Logout />
          {mobile && 'Logout'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
