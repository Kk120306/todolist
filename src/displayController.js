import {addTask} from "./taskManager.js"

export function renderTasks(tasks){
    const taskGrid = document.querySelector('.task-grid');
    taskGrid.innerHTML = '';

    if (tasks.length === 0){
        taskGrid.innerHTML = '';
    } else{
        tasks.forEach((task) => {
            const card = document.createElement("div");
            card.classList.add('task');
            card.innerHTML = `
                <div class="task-title">${task.title}</div>
                <p>${task.description}</p>
                <p><strong>Due: </strong>${task.dueDate}</p>
                <p><strong>Priority: </strong>${task.priority}</p>
                <button class="delete-btn">Delete Task</button>
            `;
            taskGrid.appendChild(card);
        })
    }
}


export function showAddModal() {
    const taskModal = document.querySelector('.add-task-modal');
    
    if (!taskModal) {
        console.error('Modal element not found');
        return;
    }

    taskModal.classList.toggle("hidden");

    // Remove any existing event listener to prevent duplicates
    const submitButton = document.getElementById("submit");
    if (!submitButton) {
        console.error('Submit button not found');
        return;
    }

    // Remove old event listener
    submitButton.replaceWith(submitButton.cloneNode(true));
    
    // Add new event listener
    document.getElementById("submit").addEventListener("click", (event) => {
        event.preventDefault();

        const titleInput = document.querySelector("input[name='title']");
        const descriptionInput = document.getElementById("description");
        const dueDateInput = document.querySelector("input[name='due-date']");
        const priorityInput = document.querySelector("select[name='priority-level']");

        if (!titleInput || !descriptionInput || !dueDateInput || !priorityInput) {
            console.error('One or more form elements not found');
            return;
        }

        const taskData = {
            title: titleInput.value,
            description: descriptionInput.value,
            dueDate: dueDateInput.value,
            priority: priorityInput.value,
        };

        if (addTask(taskData)) {
            taskModal.classList.toggle("hidden");

            // Reset form
            titleInput.value = "";
            descriptionInput.value = "";
            dueDateInput.value = "";
            priorityInput.value = "";
        }
    });
}