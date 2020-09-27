import React, { useState } from 'react';
import { Redirect } from 'react-router';
import NavBar from '../../components/NavBar';
import { useAuth } from '../../providers/Auth';
import { storage } from '../../utils/storage';

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
      <h1>This are your favourite videos</h1>
      {authenticated ? (
        favouriteIds.map((favId) => {
          return (
            <div id={favId}>
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
              <button type="button" onClick={removeFromFavorites}>
                remove
              </button>
            </div>
          );
        })
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Favourites;
