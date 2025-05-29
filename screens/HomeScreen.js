import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem';
import { saveTasks, loadTasks } from '../storage/taskStorage';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks().then(setTasks);
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (taskText) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now().toString(), text: taskText, completed: false },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TaskMate</Text>
      <TaskInput onAddTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} onDelete={deleteTask} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
});