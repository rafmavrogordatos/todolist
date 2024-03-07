import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const Task = (props) => {
    

    const [editable, setEditable] = useState(false);
    const [editedText, setEditedText] = useState(props.text);

    const handleEdit = () => {
        setEditable(true);
    };

    const handleSave = () => {
        setEditable(false);
        props.onEdit(props.text, editedText);
    };



    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                {editable ? (
                  <TextInput
                    style={[styles.itemText, styles.editableText]}
                    value={editedText}
                    onChangeText={setEditedText}
                    onBlur={handleSave}
                    autoFocus={true}
                  />
                ) : (
                  <TouchableOpacity onPress={handleEdit}>
                    <Text style={styles.itemText}>{props.text}</Text>
                  </TouchableOpacity>
                )}
            </View>
            <View style={styles.circular}></View>
        </View>
      );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;