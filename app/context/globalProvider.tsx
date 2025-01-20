"use client";
import React, {createContext, useState, useContext, useEffect} from "react";
import themes from "./themes";
// import axios from "axios";
import toast from "react-hot-toast";
import {useParams} from "next/navigation";

// @ts-ignore
export const GlobalContext = createContext();
// @ts-ignore
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
    const params = useParams();
    const [selectedTheme, setSelectedTheme] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const [tasks, setTasks] = useState([]);

    const theme = themes[selectedTheme];

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    const collapseMenu = () => {
        setCollapsed(!collapsed);
    };

    const allTasks = (username) => {
        setIsLoading(true);
        try {
            const allUserTasks = JSON.parse(localStorage.getItem("userTasks")) || {};
            const tasks = allUserTasks[username] || [];

            const sorted = tasks.sort((a, b) => {
                return (
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                );
            });

            setTasks(sorted);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const deleteTask = (username, id) => {
        try {
            const allUserTasks = JSON.parse(localStorage.getItem("userTasks")) || {};
            const userTasks = allUserTasks[username] || [];
            const updatedTasks = userTasks.filter((task) => task.id !== id);

            allUserTasks[username] = updatedTasks;
            localStorage.setItem("userTasks", JSON.stringify(allUserTasks));

            toast.success("Task deleted");

            allTasks(username);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    const updateTask = (username, updatedTask) => {
        try {
            const allUserTasks = JSON.parse(localStorage.getItem("userTasks")) || {};
            const userTasks = allUserTasks[username] || [];


            const updatedTasks = userTasks.map((task) =>
                task.id === updatedTask.id
                    ? { ...task, completed: updatedTask.completed } // Change 'completed' instead of 'isCompleted'
                    : task
            );


            allUserTasks[username] = updatedTasks;
            localStorage.setItem("userTasks", JSON.stringify(allUserTasks));


            toast.success("Task updated successfully!");
            allTasks(username); // Refresh tasks to show the updated task
        } catch (error) {
            console.error("Error updating task:", error);
            toast.error("Failed to update task.");
        }
    };


    useEffect(() => {
        allTasks(decodeURIComponent(String(params.username)));
    }, [params.username]);




    const completedTasks = tasks.filter((task) => task.completed === true);
    const importantTasks = tasks.filter((task) => task.important === true);
    const incompleteTasks = tasks.filter((task) => task.completed === false);

    const [selectedCategory, setSelectedCategory] = useState('tasks'); // default to all tasks

    const switchCategory = (category) => {
        setSelectedCategory(category);
    };

// Pass this function to the Sidebar so it can call it when a category is clicked


    return (
        <GlobalContext.Provider
            value={{
                theme,
                tasks,
                deleteTask,
                isLoading,
                completedTasks,
                importantTasks,
                incompleteTasks,
                updateTask,
                modal,
                openModal,
                closeModal,
                allTasks,
                collapsed,
                collapseMenu,
                selectedCategory,  // Pass selectedCategory
                switchCategory,
                setSelectedTheme,
                selectedTheme
            }}
        >
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);