import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function TaskInput({ onAddTask }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAddTask(text.trim());
      setText('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add Task"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: { flexDirection: 'row', marginBottom: 10 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', marginRight: 10, padding: 8 },
});