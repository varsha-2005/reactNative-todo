import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { GlobalContext } from '../Context/Context1';

const EditTask = ({ route, navigation }) => {
    const { editTask, deleteTask, tasks } = useContext(GlobalContext);
    const { taskIndex } = route.params;
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        if (tasks[taskIndex]) {
            const task = tasks[taskIndex];
            setTaskName(task.taskName);
            setDescription(task.description);
            setDate(new Date(task.date));
        }
    }, [taskIndex, tasks]);

    const handleUpdateTask = () => {
        const updatedTask = {
            taskName: taskName ,
            description: description ,
            date: date,
        };
        editTask(taskIndex, updatedTask);
        navigation.goBack();
    };


    const handleDeleteTask = () => {
        deleteTask(taskIndex);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textinput}
                placeholder="Task Name"
                value={taskName}
                onChangeText={setTaskName}
            />
            <TextInput
                style={styles.textDescription}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                multiline={true}
                numberOfLines={4}
            />
            <Text style={styles.dateText}>Selected Date: {date.toDateString()}</Text>
            <TouchableOpacity style={styles.btn} onPress={handleUpdateTask}>
                <Text style={styles.btnText}>Update</Text>
            </TouchableOpacity>



            <TouchableOpacity style={styles.btn} onPress={handleDeleteTask}>
                <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        margin: 10,
    },
    textinput: {
        color: '#000',
        fontSize: 20,
        fontWeight: '400',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    textDescription: {
        color: '#000',
        fontSize: 18,
        fontWeight: '400',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    btn: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    deleteBtn: {
        backgroundColor: 'red',
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
    },
});

export default EditTask;
