import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuUser, LuLock } from 'react-icons/lu';


import './Login.css';

export default function Login() {


  const [username, setUsername] = useState('yusuftotic');

  const [password, setPassword] = useState('totic123');

  return (
    <div className="login">

      <div className="loginImage"></div>

      <div className="loginContainer">

        <div className="loginContent">

          <form className="loginFormWrapper">
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
