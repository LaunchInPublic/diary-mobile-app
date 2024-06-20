const NoteScreen = ({ navigation, route }) => {

    const { note } = route.params;
    
    return (
        <View style={styles.container}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.description}>{note.description}</Text>
        </View>
    );
    }
}
