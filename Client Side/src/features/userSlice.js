import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    ...initialState,
 
    user: JSON.parse(localStorage.getItem('user')),
    isAuthenticated: localStorage.getItem('accessToken') ? true : false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
   
      localStorage.setItem('user', JSON.stringify(action.payload));
      localStorage.setItem('accessToken', action.payload.accessToken);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
    },
  },
});

export const { setUser, setLoading, setError, logout } = userSlice.actions;


export const signup = (userData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post('http://localhost:3001/signup', userData);
    dispatch(setUser(response.data));
  } catch (error) {
    dispatch(setError(error.response.data.message));
  }
};


export const login = (userData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post('http://localhost:3001/login', userData);
    dispatch(setUser(response.data));
  } catch (error) {
    dispatch(setError(error.response.data.message)); 
    throw error; 
  }
};

export default userSlice.reducer;
