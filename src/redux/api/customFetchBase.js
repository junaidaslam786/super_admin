import {
  fetchBaseQuery,
} from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import { logout } from '../features/userSlice';

const baseUrl = `${process.env.REACT_APP_SERVER_ENDPOINT}/`;

// Create a new mutex
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});


const customFetchBase = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  // Check for token expiry or authentication error from the server
  if (result.error?.data?.message === 'You are not logged in') {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          { credentials: 'include', url: 'superadmin/auth/refresh' },
          api,
          extraOptions
        );

        if (refreshResult.data && refreshResult.data.token) {
          // Update the token in local storage
          localStorage.setItem("token", refreshResult.data.token);

          // Retry the initial query with the new token
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logout());
          window.location.href = '/login';
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
      api.dispatch(logout());
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};


export default customFetchBase;
