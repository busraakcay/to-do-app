import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  toDoList: [],
  loading: false,
  error: null,
};

export const toDoListSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.toDoList = [action.payload, ...state.toDoList];
    },
    updateToDo: (state, {payload}) => {
      const index = state.toDoList.findIndex(todo => todo.id === payload.id);
      if (index !== -1) {
        state.toDoList[index] = payload;
      }
    },
    removeToDo: (state, action) => {
      const idToRemove = action.payload;
      state.toDoList = state.toDoList.filter(todo => todo.id !== idToRemove);
    },
    setToDoDone: (state, {payload}) => {
      const index = state.toDoList.findIndex(todo => todo.id === payload.id);
      if (index !== -1) {
        const removedTask = state.toDoList.splice(index, 1)[0];
        removedTask.done = !payload.done;
        if (removedTask.done) {
          state.toDoList.push(removedTask);
        } else {
          state.toDoList.unshift(removedTask);
        }
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addToDo,
  updateToDo,
  removeToDo,
  setToDoDone,
  setLoading,
  setError,
} = toDoListSlice.actions;
export default toDoListSlice.reducer;
