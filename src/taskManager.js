import { renderTasks } from "./displayController";
import { isAfter, isSameDay } from "date-fns";

let tasks = [
    { title: 'Task 1', dueDate: '2025-01-15', description: 'Task 1 description', priority: 'High' },
    { title: 'Task 2', dueDate: '2025-01-10', description: 'Task 2 description', priority: 'Low' },
    { title: 'Task 3', dueDate: '2025-01-12', description: 'Task 3 description', priority: 'Medium' },
    { title: 'Task 3', dueDate: '2025-01-12', description: 'Task 3 description', priority: 'Medium' },
    { title: 'Task 3', dueDate: '2025-01-12', description: 'Task 3 description', priority: 'Medium' }
];

export function showAllTasks(){
    renderTasks(tasks);
}

export function showOverdueTasks(){
    const tasksCopy = tasks.filter(task => isAfter(new Date(), new Date(task.dueDate)));
    renderTasks(tasksCopy);
}

export function showTodaysTasks(){
    const today = new Date();
    const tasksCopy = tasks.filter(task => isSameDay(today, new Date(task.dueDate)));
    renderTasks(tasksCopy);
}

export function addTask(taskData){
    if (!taskData.title || !taskData.dueDate || !taskData.priority) {
        alert("Please fill in all required fields.");
        return false;
    }


    tasks.push(taskData);

    console.log("Updated Tasks Array:", tasks);

    return true;
}