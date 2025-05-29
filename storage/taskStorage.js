import AsyncStorage from '@react-native-async-storage/async-storage';

const TASK_KEY = '@tasks';

export async function saveTasks(tasks) {
  try {
    await AsyncStorage.setItem(TASK_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error('Failed to save tasks', e);
  }
}

export async function loadTasks() {
  try {
    const data = await AsyncStorage.getItem(TASK_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load tasks', e);
    return [];
  }
}