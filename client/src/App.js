import './App.css';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import AnnouncementList from './pages/AnnouncementPage';
import AnnouncementView from './pages/AnnouncementView';
import AnnouncementWrite from './pages/AnnouncementWrite';
import TopNavigation from './components/TopNavigation';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import appConfig from './app.config';
import MyPage from './pages/MyPage';
import * as mm from '@magenta/music/es6';

global.mm = mm;

function App() {
  const [userState, setUserState] = useState({
    isSignedIn: true,
    accessToken: '',
    uuid: '',
    info: { userId: '', name: '' },
  })

  const handleSignIn = ({ uuid, accessToken }) => {
    setUserState(prev => ({ ...prev, uuid, accessToken }), () => {
      axios.get(`${appConfig.API_SERVER}/user/${uuid}`)
        .then((res) => {
          if (res.status === 200) {
            setUserState(prev => ({
              ...prev,
              info: {
                userId: res.data.user_id,
                name: res.data.name,
              },
            }));
          }
        })
    })
  }

  return (
    <div className="App">
      <TopNavigation {...{userState}} />
      <Routes>
        <Route path="/">
          <Route index element="Hello World" />
          <Route path="sign-in" element={<SignInPage {...{ setUserState }}/>} />
          <Route path="sign-up" element={<SignUpPage {...{ setUserState }}/>} />
          <Route path="announcementList" element={<AnnouncementList userState={ userState } />} />
          <Route path="announcementView" element={<AnnouncementView userState={ userState } announcementUUID={ announcementUUID } />} />
          <Route path="announcementWrite" element={<AnnouncementWrite announcementUUID={ announcementUUID } />} />
          <Route path="user" element={<MyPage userState={userState} />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
