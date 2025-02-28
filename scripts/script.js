document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.querySelector("input[type='text']");
    const addBtn = document.getElementById("add-Btn");
    const deleteBtn = document.getElementById("delete-Btn");
    const completedBtn = document.getElementById("completed-Btn");
    const taskList = document.getElementById("tasks");
    const completedTaskList = document.getElementById("completed-tasks");

    addBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "" || taskText === "Ingrese aca la tarea") return;
        
        const li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", () => {
            li.classList.toggle("selected");
        });
        taskList.appendChild(li);
        taskInput.value = "";
    });

    deleteBtn.addEventListener("click", () => {
        document.querySelectorAll("#tasks li.selected").forEach(task => task.remove());
    });

    completedBtn.addEventListener("click", () => {
        document.querySelectorAll("#tasks li.selected").forEach(task => {
            task.classList.remove("selected");
            completedTaskList.appendChild(task);
        });
    });
});
