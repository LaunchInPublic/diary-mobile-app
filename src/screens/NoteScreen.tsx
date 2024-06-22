import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScreenName } from "./navigation.type";

type RootStackParamList = {
  [ScreenName.NOTE]: { note: { title: string; description: string } };
};

type Props = NativeStackScreenProps<RootStackParamList, ScreenName.NOTE>;

export const NoteScreen: React.FC<Props> = ({ route }) => {
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
