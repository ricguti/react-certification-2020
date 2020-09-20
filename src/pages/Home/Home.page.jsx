import React, { useRef, useState } from 'react';
import NavBar from '../../components/NavBar';
import Layout from '../../components/Layout';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');

  const { authenticated } = useAuth();

  return (
    <section className="homepage" ref={sectionRef}>
      <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />

      {authenticated ? (
        <Layout>
          <h1>Hello {authenticated}!</h1>
        </Layout>
      ) : (
        <Layout>
          <h1>Hello stranger!</h1>
        </Layout>
      )}
    </section>
  );
}

export default HomePage;
