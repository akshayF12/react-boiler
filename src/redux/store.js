import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import { combineReducers } from 'redux';
import users from './userSlice';


const reducer = combineReducers({
    counterReducer,
    users,
  })


const store = configureStore({
    reducer,
});


export default store;