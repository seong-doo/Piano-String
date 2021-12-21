import './App.css';
<<<<<<< HEAD
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
=======
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import TopNavigation from './components/TopNavigation';
import Announcement from './pages/Announcement';
import Footer from './components/Footer';
>>>>>>> 3565462 (WIP: Modify components)
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
<<<<<<< HEAD
<<<<<<< HEAD
  const [userState, setUserState] = useState({
    isSignedIn: false,
    accessToken: '',
    info: {},
  })

  const controlLogin = () => {
    setUserState(!userState.isSignedIn);
=======
  const [isLogin, setIsLogin] = useState(false)

  const controlLogin = () => {
    setIsLogin(!isLogin);
>>>>>>> 3565462 (WIP: Modify components)
  }
=======
  const [isLogin, setIsLogin] = useState(false);

  const controlLogin = () => {
    setIsLogin(!isLogin);
  };
>>>>>>> 9a9d057 (Client: Add mypage and misc. components)

  return (
    <div className="App">
<<<<<<< HEAD
      <Routes>
        <Route path="/">
          <Route index element="Hello World" />
          <Route path="sign-in" element={<SignInPage {...{ setUserState }}/>} />
          <Route path="sign-up" element={<SignUpPage {...{ setUserState }}/>} />
        </Route>
      </Routes>
=======
      <TopNavigation controlLogin={controlLogin} isLogin={isLogin} />
      <Routes>
        <Route path="/">
          <Route index element="Hello World" />
          <Route path="user" element={<MyPage isLogin={isLogin} />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="announcement" element={<Announcement />} />
        </Route>
      </Routes>
      <Footer />
>>>>>>> 3565462 (WIP: Modify components)
    </div>
  );
}

export default App;
