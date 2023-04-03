import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');

  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/myaccount') {
      setTitle('My account');
    } else if (location.pathname === '/myaccount/stats') {
      setTitle('Statistics');
    } else if (location.pathname === '/myaccount/post') {
      setTitle('Post');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
