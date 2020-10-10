import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Layout from '../../components/Layout';

import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function authenticate(event) {
    event.preventDefault();
    login(username, password);
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
              <input
                required
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>password </strong>
              <input
                required
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">login</button>
        </form>
      </section>
    </Layout>
  );
}

export default LoginPage;
