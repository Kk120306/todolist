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
            `;
            taskGrid.appendChild(card);
        })
    }
}

export function showAddModal(){
    const taskModal = document.querySelector(".add-task-modal");

    taskModal.classList.toggle("hidden");

    document.getElementById("submit").addEventListener("click", (event) => {
        event.preventDefault(); 


        const taskData = {
            title: document.querySelector("input[name='title']").value,
            description: document.getElementById("description").value,
            dueDate: document.querySelector("input[name='due-date']").value,
            priority: document.querySelector("select[name='priority-level']").value,
        };


        if (addTask(taskData)) {
            taskModal.classList.toggle("hidden");

            document.querySelector("input[name='title']").value = "";
            document.getElementById("description").value = "";
            document.querySelector("input[name='due-date']").value = "";
            document.querySelector("select[name='priority-level']").value = "";
        }
    });
}