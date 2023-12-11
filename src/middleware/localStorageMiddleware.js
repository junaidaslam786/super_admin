// localStorageMiddleware.js

export const localStorageMiddleware = store => next => action => {
    let result = next(action);
    localStorage.setItem('appState', JSON.stringify(store.getState()));
    return result;
  };
  
  export const reHydrateStore = () => {
    if (localStorage.getItem('appState') !== null) {
      return JSON.parse(localStorage.getItem('appState')); // re-hydrate the store
    }
  };