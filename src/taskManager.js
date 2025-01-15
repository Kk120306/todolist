import { renderTasks } from "./displayController";
import { isAfter, isSameDay } from "date-fns";


const tasks = [
    {
        id: 1,
        title: "Grocery shopping",
        description: "Buy fruits, vegetables, and snacks for the week.",
        dueDate: "2025-01-20",
        priority: "Medium"
    },
    {
        id: 2,
        title: "Workout session",
        description: "Complete a 30-minute cardio and weightlifting session.",
        dueDate: "2025-01-21",
        priority: "High"
    },
    {
        id: 3,
        title: "Prepare presentation",
        description: "Draft slides for the Monday team meeting.",
        dueDate: "2025-01-22",
        priority: "High"
    },
    {
        id: 4,
        title: "Read a book",
        description: "Read 50 pages of 'Atomic Habits' for self-improvement.",
        dueDate: "2025-01-25",
        priority: "Low"
    },
    {
        id: 5,
        title: "Pay bills",
        description: "Settle electricity and internet bills before due date.",
        dueDate: "2025-01-23",
        priority: "Medium"
    }
];


export function showAllTasks(){
    renderTasks(tasks);
}

export function showOverdueTasks(){
    const tasksCopy = tasks.filter(task => isAfter(new Date(), new Date(task.dueDate)));
    renderTasks(tasksCopy);
}

// there is a time zone issue here but I dont know how to fix that. 

export function showTodaysTasks(){
    const today = new Date();
    const tasksCopy = tasks.filter(task => isSameDay(today, new Date(task.dueDate)));
    renderTasks(tasksCopy);
}

export function addTask(taskData){
    const taskId = Date.now();

    if (!taskData.title || !taskData.dueDate || !taskData.priority) {
        alert("Please fill in all required fields.");
        return false;
    }

    tasks.push({ id: taskId, ...taskData });
    console.log("Updated Tasks Array:", tasks);
    renderTasks(tasks);

    document.querySelector(".delete-btn").addEventListener("click", () => {
        deleteTask(taskId);
    });

    return true;
}

export function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);

    // Find and remove the task from the DOM
    const taskList = document.getElementById("task-list");
    const taskDiv = taskList.querySelector(`[data-id='${taskId}']`);
    if (taskDiv) {
        taskList.removeChild(taskDiv);
    }

    console.log("Task deleted:", taskId);
    console.log("Remaining tasks:", tasks);
}