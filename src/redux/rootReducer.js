import {combineReducers} from '@reduxjs/toolkit';
import toDoReducer from './slices/toDoListSlice';

export const rootReducer = combineReducers({
  toDo: toDoReducer,
});
