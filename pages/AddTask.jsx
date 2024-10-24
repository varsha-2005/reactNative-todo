import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker';
import { GlobalContext } from '../Context/Context1';

const AddTask = () => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [taskName,setTaskName] = useState('')
    const [description,setDescription] = useState('')
    const {addTask} = useContext(GlobalContext)

    const handleAddTask = () =>{
        const newTask = {taskName,description,date}
        addTask(newTask)
        setTaskName('')
        setDescription('')
    }
    
    return (
        <View style={styles.container}>
            <TextInput style={styles.textinput} placeholder="Enter your text here" value={taskName} onChangeText={setTaskName}></TextInput>
            <TextInput style={styles.textDescription} placeholder="Enter your description here" multiline={true} numberOfLines={4} value={description} onChangeText={setDescription}></TextInput>
            <View style={styles.view}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: '#fff', fontWeight: "bold", fontSize: 20 }} onPress={handleAddTask}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => setOpen(true)}>
                    <Text style={{ color: '#fff', fontWeight: "bold", fontSize: 20 }}>Date</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.date}>
                <Text style={styles.dateText}>Selected Date: {date.toDateString()}</Text>
                <DatePicker modal open={open} date={date} mode='date' onConfirm={(selectedDate) => {
                    setOpen(false);
                    setDate(selectedDate);
                }}
                onCancel={() => {
                    setOpen(false);
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 20,
        backgroundColor: 'lightgrey',
        alignItems: "center",
        borderRadius: 24,
        margin: 14,
    },
    textinput: {
        color: "#000", 
        fontSize: 20,
        fontWeight: '400',
        marginHorizontal: 8,
        paddingHorizontal: 24,
        paddingVertical: 15,
        borderColor: 'gray', 
        borderWidth: 1,      
        width: '100%', 
        borderRadius: 8, 
    },
    textDescription: {
        marginTop: 10,
        color: '#000', 
        fontSize: 20,
        fontWeight: '400',
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 8,
        paddingHorizontal: 24,
        paddingVertical: 15,
        width: '100%',
        borderRadius: 8, 
    },
    dateText: {
        marginTop: 10,
        fontSize: 16,
        color: '#000',
    },
    date: {
        marginTop: 20,
        alignItems: 'center',
    },
    btn: {
        backgroundColor: "#000",
        borderRadius: 6,
        paddingVertical: 5,
        paddingHorizontal:20,
        marginVertical: 15,
        flex: 1,
        gap:15,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 1, 
    },
    view: {
        flexDirection: "row",
        alignItems: "center"
    }
});

export default AddTask;
