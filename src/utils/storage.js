import { USERS, FAVOURITES, AUTH_STORAGE_KEY } from './constants';

const storage = {
  get(key) {
    try {
      const rawValue = window.localStorage.getItem(key);
      return JSON.parse(rawValue);
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return null;
    }
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

  loginApi(username, password) {
    let authenticated;
    const users = this.get(USERS) || [];

    const matchedUser = users.filter((user) => user.username === username)[0];
    if (matchedUser) {
      authenticated = matchedUser.password === password ? username : '';
    } else {
      this.set(USERS, users.concat({ username, password }));
      authenticated = username;
    }

    return authenticated;
  },

  addFavourite(videoId) {
    const username = this.get(AUTH_STORAGE_KEY);
    const favourites = this.get(FAVOURITES) || [];

    console.log(username);

    const userIndex = favourites.map((fav) => fav.username).indexOf(username);
    if (userIndex >= 0) {
      favourites[userIndex].favouriteIds = favourites[userIndex].favouriteIds.concat(
        videoId
      );
      this.set(FAVOURITES, favourites);
    } else {
      this.set(FAVOURITES, favourites.concat({ username, favouriteIds: [videoId] }));
    }
  },

  removeFavourite(videoId) {
    const username = this.get(AUTH_STORAGE_KEY);
    const favourites = this.get(FAVOURITES) || [];

    const userIndex = favourites.map((fav) => fav.username).indexOf(username);
    if (userIndex >= 0) {
      const videoIndex = favourites[userIndex].favouriteIds.indexOf(videoId);
      if (videoIndex >= 0) {
        favourites[userIndex].favouriteIds.splice(videoIndex, 1);
        this.set(FAVOURITES, favourites);
      }
    }
  },

  getFavourites() {
    const username = this.get(AUTH_STORAGE_KEY);
    const favourites = this.get(FAVOURITES) || [];

    const userIndex = favourites.map((fav) => fav.username).indexOf(username);
    if (userIndex >= 0) {
      return favourites[userIndex].favouriteIds;
    }
  },
};

export { storage };
