import axios from 'axios';
import React, { useState } from 'react';
import hashPassword from '../utils/hashPassword';

function SignUpPage() {
  const [userInput, setuserInput] = useState({
    id: '',
    pw: '',
    name: '',
    pwCheck: '',
  });
  const API_SERVER = '';

  const controlInputValue = key => (e) => {
    setuserInput({ ...userInput, [key]: e.target.value });
  };

  const onClickSignUp = () => {
    const { id, pw, name, pwCheck } = userInput;
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

  return (
    <div className="SignUpContainer">
      <div className="SignUpLogo">회원가입</div>
      <div>
        <div>ID</div>
        <input type="text" onChange={controlInputValue('id')} />
      </div>
      <div>
        <div>Username</div>
        <input type="text" onChange={controlInputValue('name')} />
      </div>
      <div>
        <div>Password</div>
        <input type="password" onChange={controlInputValue('pw')} />
      </div>
      <div>
        <div>Password Check</div>
        <input type="password" value={userInput.pwCheck} onChange={controlInputValue('pwCheck')} />
      </div>
      <div className="SignUpBtnContainer">
        <button type="button" onClick={onClickSignUp}>SignUp</button>
      </div>
    </div>

  );
}

export default SignUpPage;
