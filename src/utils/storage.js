import { USERS } from './constants';

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
};

export { storage };
