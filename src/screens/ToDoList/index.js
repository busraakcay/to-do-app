import React, {useState} from 'react';
import {SafeAreaView, View, Pressable, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToDo} from '../../redux/slices/toDoListSlice';
import {createTaskObject} from '../../helpers/functions';
import ToDoListItem from '../../components/ToDoListItem';
import Text from '../../components/custom/Text';
import Input from '../../components/custom/Input';
import {styles} from './styles';

const renderItem = ({item}) => <ToDoListItem item={item} />;

const ToDoList = () => {
  const dispatch = useDispatch();
  const {toDoList: data} = useSelector(state => state.toDo);
  const [text, setText] = useState('');

  const addToDoHandler = () => {
    dispatch(addToDo(createTaskObject(text)));
    setText('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title} text={'To Do App'} />
        <View style={styles.enterTaskContainer}>
          <Input text={text} setText={setText} placeholder={'Enter a task'} />
          <Pressable onPress={addToDoHandler}>
            <Text text={'Add'} />
          </Pressable>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default ToDoList;
