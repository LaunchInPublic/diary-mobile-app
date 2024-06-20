import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NoteScreen = ({ navigation, route }) => {
    const { note } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.description}>{note.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1;
    },
    title: {
        font-size: 14px;
        font-weight: bold;
    },
    description: {
        font-size: 12px;
    },
});
