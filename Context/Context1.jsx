import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

const Context = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const editTask = (id, updatedTask) => {
        setTasks((prevTasks) => 
            prevTasks.map((task, index) => (index === id ? updatedTask : task))
        );
    };

    const deleteTask = (id) => {
        setTasks((prevTasks) => 
            prevTasks.filter((_, index) => index !== id)
        );
    };

    return (
        <GlobalContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default Context;
