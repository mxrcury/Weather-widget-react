import { configureStore } from '@reduxjs/toolkit'
import { widgetReducer } from './widgetSlice'
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';


export const store = configureStore({
    reducer:{
        widget:widgetReducer
    },
    middleware:[thunkMiddleware]
})