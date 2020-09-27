import React, { useState } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import { useAuth } from '../../providers/Auth';
import { storage } from '../../utils/storage';

const Button = styled.button`
  background-color: white;
  border: none;
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  display: flex;
`;

const FavElement = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;

const Headline = styled.h1`
  color: white;
  margin: 20px;
`;

const Favourites = () => {
  const { authenticated } = useAuth();
  const [favouriteIds, setFavouriteIds] = useState(storage.getFavourites());

  const removeFromFavorites = (event) => {
    event.preventDefault();
    storage.removeFavourite(event.currentTarget.parentNode.getAttribute('id'));
    setFavouriteIds(storage.getFavourites());
  };

  return (
    <div>
      <NavBar />
      <Headline>These are your favourite videos</Headline>
      {authenticated ? (
        <div>
          {favouriteIds.map((favId) => {
            return (
              <FavElement id={favId}>
                <Button type="button" onClick={removeFromFavorites}>
                  Remove Favourite
                </Button>
                <iframe
                  width="400"
                  height="225"
                  allowFullScreen
                  frameBorder="0"
                  key={favId}
                  title={favId}
                  src={`https://www.youtube.com/embed/${favId}?controls=0&autoplay=0`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />
              </FavElement>
            );
          })}
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Favourites;
