import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LuUser, LuLock } from 'react-icons/lu';

import { login } from '../../slices/authSlice';

import './Login.css';

export default function Login() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login({ username, password }))
    .then((response) => {
      if (response.payload?.success && response.payload.success === true) navigate('/dashboard/new-post');
    })
    .catch((err) => {
      console.error('Login error:', err);
    })

  }

  return (
    <div className="login">

      <div className="loginImage"></div>

      <div className="loginContainer">

        <div className="loginContent">

          <form className="loginFormWrapper" onSubmit={handleLogin} >
            <div className="loginWelcome">
              <h2 className="loginWelcomeTitle">Giriş yap</h2>
            </div>

            <div className="loginLogin">
              <div className="loginLoginItem">
                <label className="loginLoginLabel">Kullanıcı Adı</label>

                <div className="loginLoginInputWrapper">
                  <LuUser className="loginLoginInputIcon" />
                  <input
                    type="text"
                    value={username}
                    className="loginLoginInput"
                    placeholder="Kullanıcı adınızı giriniz"
                    onChange={(e) => setUsername(e.target.value.trim())}
                  />
                </div>
              </div>

              <div className="loginLoginItem">
                <label className="loginLoginLabel">Şifre</label>

                <div className="loginLoginInputWrapper">
                  <LuLock className="loginLoginInputIcon" />
                  <input
                    type="password"
                    value={password}
                    className="loginLoginInput"
                    placeholder="Şifrenizi giriniz"
                    onChange={(e) => setPassword(e.target.value.trim())}
                  />
                </div>
              </div>

              <button type="submit" className="loginLoginButton">Giriş Yap</button>
            </div>

          </form>

        </div>

      </div>

    </div>
  )
}
