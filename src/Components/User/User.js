import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import NotFound from '../NotFound';
import Head from '../Helper/Head';
import { useSelector } from 'react-redux';

const User = () => {
  const { id } = useSelector((state) => state.user.data);

  return (
    <section className="container">
      <Head title="My account" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={id} />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
