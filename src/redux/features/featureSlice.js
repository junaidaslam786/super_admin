import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    features: [],
    status: 'idle',
    error: null,
};

export const featureSlice = createSlice({
    name: 'feature',
    initialState,
    reducers: {
        setFeatures: (state, action) => {
            state.features = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setFeatures, setStatus, setError } = featureSlice.actions;

export default featureSlice.reducer;
