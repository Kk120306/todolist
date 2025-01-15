import { showOverdueTasks, showTodaysTasks, showAllTasks } from './taskManager.js';
import { showAddModal } from './displayController.js';
import './styles.css';

document.addEventListener("DOMContentLoaded", () => {
    const overdueButton = document.querySelector('.show-overdue');
    const todayButton = document.querySelector('.show-today');
    const allButton = document.querySelector('.show-all');
    const addTaskButton = document.querySelector('.add-task');

    if (overdueButton) {
        overdueButton.addEventListener('click', showOverdueTasks);
    }
    if (todayButton) {
        todayButton.addEventListener('click', showTodaysTasks);
    }
    if (allButton) {
        allButton.addEventListener('click', showAllTasks);
    }
    if (addTaskButton) {
        addTaskButton.addEventListener('click', showAddModal);
    }

    showAllTasks();
});