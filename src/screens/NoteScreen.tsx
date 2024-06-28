import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Markdown from "markdown-to-jsx";

import { ScreenName } from "../types/navigation.type";

type RootStackParamList = {
  [ScreenName.NOTE]: { note: { title: string; description: string } };
};

type Props = NativeStackScreenProps<RootStackParamList, ScreenName.NOTE>;

export const NoteScreen: React.FC<Props> = ({ route }) => {
    const { note } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{note.title}</Text>
            <Markdown style={styles.description}>{note.description}</Markdown>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 12,
    },
});
