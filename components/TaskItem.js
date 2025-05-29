import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(task.id)} style={{ flex: 1 }}>
        <Text style={task.completed ? styles.completed : styles.text}>
          {task.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text style={styles.delete}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
  text: { fontSize: 16 },
  completed: { fontSize: 16, textDecorationLine: 'line-through', color: 'gray' },
  delete: { color: 'red', marginLeft: 10, fontSize: 18 },
});