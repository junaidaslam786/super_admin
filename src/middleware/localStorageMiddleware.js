import { debounce } from 'lodash';

// Debounced function to save state to localStorage
const saveState = debounce((state) => {
  try {
    const stateToPersist = selectDataToPersist(state);
    localStorage.setItem('appState', JSON.stringify(stateToPersist));
  } catch (error) {
    // Handle serialization error
    console.error('Failed to save state:', error);
  }
}, 1000); // Adjust debounce time as needed

// Function to select which parts of the state to persist
const selectDataToPersist = (state) => {
  // Selectively persist only required parts of the state
  return {
    userState: state.userState,
    // Add other slices of the state you want to persist
  };
};

export const localStorageMiddleware = store => next => action => {
  const result = next(action);
  saveState(store.getState());
  return result;
};

export const reHydrateStore = () => {
  try {
    const savedState = localStorage.getItem('appState');
    return savedState ? JSON.parse(savedState) : undefined; // Safely parse and return the state
  } catch (error) {
    // Handle parsing error
    console.error('Failed to parse saved state:', error);
    return undefined;
  }
};
