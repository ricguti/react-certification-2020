import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../Search';
import { useAuth } from '../../providers/Auth';

const TopNavBar = styled.div`
  overflow: hidden;
`;

const PageLink = styled.div`
  float: left;
  display: block;
  text-align: center;
  padding: 10px 16px;
  margin-left: 16px;
  text-decoration: none;
  font-size: 17px;
`;

const NavBar = (props) => {
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <TopNavBar>
      <PageLink>
        <Link to="/">Home</Link>
      </PageLink>

      {authenticated && (
        <PageLink>
          <Link to="/">Favourites</Link>
        </PageLink>
      )}

      {authenticated ? (
        <PageLink>
          <Link to="/" onClick={deAuthenticate}>
            ← logout
          </Link>
        </PageLink>
      ) : (
        <PageLink>
          <Link to="/login">← login</Link>
        </PageLink>
      )}

      <Search searchVideos={props.searchVideos} />
    </TopNavBar>
  );
};

export default NavBar;
