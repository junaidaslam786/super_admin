import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

// Utility function to clean up the user object
const cleanUserData = (user) => {
  const excludeFields = ['password', 'rememberToken', 'otpCode', 'otpExpiry'];
  return Object.keys(user)
      .filter(key => !excludeFields.includes(key))
      .reduce((obj, key) => {
          obj[key] = user[key];
          return obj;
      }, {});
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
    },
    setUser: (state, action) => {
      state.user = cleanUserData(action.payload); 
      state.user = { ...state.user, ...action.payload };
    },

    
    updateProfileImage: (state, action) => {
      state.user.profileImage = action.payload;
    },
  },
});



export default userSlice.reducer;

export const { logout, setUser, updateUserProfile, updateProfileImage } =
  userSlice.actions;
