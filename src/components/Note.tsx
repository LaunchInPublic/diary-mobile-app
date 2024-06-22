import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Note = {
  id: string;
  title: string;
  content: string;
};

export const Note = ({ note }: { note: Note }) => {
  return (
    <View style={styles.note}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  note: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
  },
});
