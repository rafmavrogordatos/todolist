// App.js

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Platform, TouchableOpacity } from 'react-native';
import Task from './components/Task';
import Menu from './components/Menu';
import Header from './components/Header';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuLink, setMenuLink] = useState("");
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleLinkClick = (link) => {
    setMenuLink(link);
    setShowMenu(false);
  };

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const handleEditTask = (oldTask, newTask) => {
    const updatedTasks = taskItems.map((item) => (item === oldTask ? newTask : item));
    setTaskItems(updatedTasks);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  return (
    <View style={styles.container}>
      <Header title="Todo List App" onMenuPress={() => setShowMenu(!showMenu)} />

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go */}
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} onEdit={handleEditTask} />
            </TouchableOpacity>
          ))}
          <Task text={'Task 1'} />
        </View>
      </View>

      {/* Add Task Input */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/* Menu */}
      {showMenu && <Menu onLinkClick={handleLinkClick} onCloseMenu={handleMenuClose} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {},
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 30,
  },
});
