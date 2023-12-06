import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import ToDoList from './screens/ToDoList';

const App = () => {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
};

export default App;
