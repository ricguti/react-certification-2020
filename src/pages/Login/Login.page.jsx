import React from 'react';
import { useHistory } from 'react-router';
import Layout from '../../components/Layout';

import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    login(
      document.getElementById('username').value,
      document.getElementById('password').value
    );
    history.push('/');
  }

  return (
    <Layout>
      <section className="login">
        <h1>Welcome back!</h1>
        <form data-testid="login-form" onSubmit={authenticate} className="login-form">
          <div className="form-group">
            <label htmlFor="username">
              <strong>username </strong>
              <input required type="text" id="username" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>password </strong>
              <input required type="password" id="password" />
            </label>
          </div>
          <button type="submit">login</button>
        </form>
      </section>
    </Layout>
  );
}

export default LoginPage;
