"use client"
import React from 'react'
import Tasks from "@/app/Components/Tasks";
import {useGlobalState} from "@/app/context/globalProvider";

const Page = () => {
    // @ts-ignore
    const { selectedCategory, tasks, completedTasks, importantTasks, incompleteTasks } = useGlobalState();

    let displayedTasks = tasks; // Default to all tasks

    if (selectedCategory === 'completed') {
        displayedTasks = completedTasks;
    } else if (selectedCategory === 'important') {
        displayedTasks = importantTasks;
    } else if (selectedCategory === 'incomplete') {
        displayedTasks = incompleteTasks;
    }


    return (
        <div>
            <Tasks
                title="All Tasks" tasks={displayedTasks}
            />
</div>
    )
}
export default Page
