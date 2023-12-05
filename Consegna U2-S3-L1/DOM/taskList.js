window.onload = () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        generateTask();
    });

    function generateTask() {
        const newTask = document.getElementById("writeTask").value;
        const taskContainer = document.getElementById("taskContainer");
        const col = document.createElement("div");
        col.classList.add("col-12", "mb-2", "tasks");
        col.innerHTML = `
            <div class="border border-dark rounded-2 p-2">
                <div class="d-flex align-items-center">
                    <p class="parag mb-0 flex-grow-1">${newTask}</p>
                    <button class="deleteTask btn btn-danger">✖️</button>
                </div>        
            </div> `;
        taskContainer.appendChild(col);

        resetInput();
        taskComplete();
        deleteTask();
    }

    function taskComplete() {
        const allTasks = document.querySelectorAll(".tasks");

        allTasks.forEach((task) => {
            const parag = task.querySelector(".parag");
            parag.addEventListener("click", function () {
                parag.classList.toggle("completed");
            });
        });
    }

    function deleteTask() {
        const deleteTaskButtons = document.querySelectorAll(".deleteTask");
        deleteTaskButtons.forEach((button) => {
            button.addEventListener("click", function (event) {
                event.target.closest(".col-12").remove();
            });
        });
    }

    function resetInput() {
        document.getElementById("writeTask").value = "";
    }
};
