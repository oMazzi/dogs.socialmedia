import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Header from './Components/Header';
import Login from './Components/Login/Login';
// import { UserStorage } from './UserContext';
import User from './Components/User/User';
// import ProtectedRoute from './Components/Helper/ProtectedRoute';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';
import { useDispatch } from 'react-redux';
import { autoLogin } from './store/user';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        {/* <UserStorage> */}
        <Header />
        <main className="AppBody">
          <Routes>
            <Route
              path="https://omazzi.github.io/dogs.socialmedia/"
              element={<Home />}
            />
            <Route path="login/*" element={<Login />} />
            (if (data) return <Route path="/myaccount/*" element={<User />} />
            ; else return <Route path="/login/*" element={<Login />} />
            ;)
            {/* <ProtectedRoute element={<User />} /> */}
            <Route path="profile/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        {/* </UserStorage> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
