import React from "react";

const LoginForm = () => (
  <div class="loginForm">
    <div class="login">
      <input type="text" placeholder="Введите логин или email" />
      <input type="password" placeholder="Введите пароль" />
    </div>
    <div class="submit">
      <input type="submit" value="Войти" />
    </div>
  </div>
);

export default LoginForm;
