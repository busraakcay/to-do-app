import {Pressable, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  removeToDo,
  setToDoDone,
  updateToDo,
} from '../../redux/slices/toDoListSlice';
import Text from '../custom/Text';
import Input from '../custom/Input';
import {styles} from './styles';

const ToDoListItem = ({item}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(item.task);

  const updateToDoHandler = item => {
    const updatedData = {
      ...item,
      task: text,
    };
    dispatch(updateToDo(updatedData));
    setText(text);
    console.log(updatedData);
  };

  const deleteToDoHandler = id => {
    dispatch(removeToDo(id));
  };

  const setToDoDoneHandler = id => {
    dispatch(setToDoDone(id));
  };

  return (
    <View style={styles.container}>
      <Input text={text} setText={setText} placeholder={'Enter a task'} style={styles.input} />
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.editButton}
          onPress={() => updateToDoHandler(item)}>
          <Text text={'Edit'} />
        </Pressable>
        <Pressable
          style={styles.deleteButton}
          onPress={() => deleteToDoHandler(item.id)}>
          <Text text={'Del'} />
        </Pressable>
        <Pressable
          style={styles.doneButton}
          onPress={() => setToDoDoneHandler(item)}>
          <Text text={'Ok'} />
        </Pressable>
      </View>
    </View>
  );
};

export default ToDoListItem;
