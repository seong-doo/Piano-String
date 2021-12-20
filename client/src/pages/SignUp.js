import axios from 'axios';
import React, { useState } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import hashPassword from '../utils/hashPassword';
import appConfig from '../app.config';
=======
import hashPassword from '../utils/hashPassword';
>>>>>>> 3565462 (WIP: Modify components)

function SignUpPage({ setUserState }) {
  const navigate = useNavigate();
  const [userInput, setuserInput] = useState({
    id: '',
    pw: '',
    name: '',
    pwCheck: '',
  });
<<<<<<< HEAD
=======
  const API_SERVER = '';
>>>>>>> 3565462 (WIP: Modify components)

  const controlInputValue = key => (e) => {
    setuserInput({ ...userInput, [key]: e.target.value });
  };

  const onClickSignUp = () => {
    const { id, pw, name, pwCheck } = userInput;
<<<<<<< HEAD

    if (!id || !pw || !name || !pwCheck) {
      console.log('모든 칸을 채워야 합니다');
      return;
    }

    if (pw !== pwCheck) { return; }

    hashPassword(pw)
      .then((pw_hash) => {
        axios.post(appConfig.API_SERVER + '/user/sign-up',{ id, pw_hash, name })
        .then(res => {
          setUserState({
            isSignedIn: true,
            access_token: res.data.access_token,
            uuid: res.data.uuid,
          })
        })
        .then(() => { navigate('/'); })
      });
  }
      // TODO: exception handling
=======
    // // TODO: 해쉬작업

    if (!id || !pw || !name || !pwCheck) {
      console.log('모든 칸을 채워야 합니다');
      return;
    }

    hashPassword(pw)
      .then((pwHash) => {
        hashPassword(pwCheck)
          .then((pwCheckHash) => {
            if (pwHash === pwCheckHash) {
              console.log('사용가능');
            } else {
              console.log('비밀번호가 다릅니다');
            }
          });

        //   axios.post(API_SERVER,{
        //   id,
        //   pw_hash,
        //   name
        //   })
        //   .then(res => {
        //   console.log('가입성공');
        //   })
      });
  };
>>>>>>> 3565462 (WIP: Modify components)

  return (
    <div className="SignUpContainer">
      <div className="SignUpLogo">회원가입</div>
      <div>
        <div>ID</div>
        <input type="text" placeholder="ID" onChange={controlInputValue('id')} />
      </div>
      <div>
        <div>Username</div>
        <input type="text" placeholder="Username" onChange={controlInputValue('name')} />
      </div>
      <div>
        <div>Password</div>
        <input type="password" placeholder="Password" onChange={controlInputValue('pw')} />
      </div>
      <div>
        <div>Password Check</div>
        <input type="password" placeholder="Password check" value={userInput.pwCheck} onChange={controlInputValue('pwCheck')} />
      </div>
      <div className="SignUpBtnContainer">
        <button type="button" onClick={onClickSignUp}>SignUp</button>
      </div>
    </div>

  );
}

export default SignUpPage;
