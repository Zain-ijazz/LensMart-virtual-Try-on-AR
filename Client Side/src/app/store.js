// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // You can choose a different storage method if needed
// import cartReducer from '../features/cartSlice';
// import {thunk} from 'redux-thunk';
// const persistConfig = {
//   key: 'root',
//   storage,
//   //whitelist: ['allCart'], // List of reducer keys to persist
// };

// const persistedReducer = persistReducer(persistConfig, cartReducer);

//  export const store = configureStore({
//   reducer: {
//     allCart: persistedReducer,
//     middleware: [thunk]
//     // Add other reducers here if needed
//   },
// });

//export const persistor = persistStore(store);

//export { store, persistor };



import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../features/cartSlice";
import userReducer from "../features/userSlice"; 

export default configureStore({
  reducer: {
    allCart: cartReducer,
    user: userReducer,
  
  },
});