import { showOverdueTasks, showTodaysTasks, showAllTasks, addTask } from './taskManager.js';
import { showAddModal } from './displayController.js'

import "./styles.css";

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
    // Button event listeners to filter tasks
    document.querySelector('.add-task').addEventListener('click', showAddModal);
    document.querySelector('.show-overdue').addEventListener('click', showOverdueTasks);
    document.querySelector('.show-today').addEventListener('click', showTodaysTasks);
    document.querySelector('.show-all').addEventListener('click', showAllTasks);

    showAllTasks();
});

