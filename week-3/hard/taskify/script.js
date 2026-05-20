const addNewBtns = document.querySelectorAll(".addNew");

addNewBtns.forEach(function(addNew) {
    addNew.addEventListener("click", function() {
        const modalOverlay = document.createElement("div");
        modalOverlay.classList.add("modal-overlay");

        const modalDiv = document.createElement("div");
        modalDiv.classList.add("modal");

        const heading = document.createElement("h2");
        heading.innerText = "Add New Task";

        const todoInput = document.createElement("input");
        todoInput.setAttribute("class", "todo-input");
        todoInput.setAttribute("placeholder", "Task title");

        const descriptionInput = document.createElement("input");
        descriptionInput.setAttribute("class", "description-input");
        descriptionInput.setAttribute("placeholder", "Task description");

        const btnBox = document.createElement("div");
        btnBox.classList.add("modal-buttons");

        const addBtn = document.createElement("button");
        addBtn.setAttribute("class", "add-btn");
        addBtn.innerText = "Add Task";

        const closeBtn = document.createElement("button");
        closeBtn.setAttribute("class", "close-btn");
        closeBtn.innerText = "Cancel";

        btnBox.appendChild(addBtn);
        btnBox.appendChild(closeBtn);

        modalDiv.appendChild(heading);
        modalDiv.appendChild(todoInput);
        modalDiv.appendChild(descriptionInput);
        modalDiv.appendChild(btnBox);

        modalOverlay.appendChild(modalDiv);
        document.body.appendChild(modalOverlay);

        closeBtn.addEventListener("click", function() {
            modalOverlay.remove();
        });

        modalOverlay.addEventListener("click", function(e) {
            if (e.target === modalOverlay) {
                modalOverlay.remove();
            }
        });

        addBtn.addEventListener("click", function() {
            const taskTitle = todoInput.value;
            const taskDescription = descriptionInput.value;

            if (taskTitle === "") {
                alert("Please enter task title");
                return;
            }

            const taskCard = document.createElement("div");
            taskCard.classList.add("task-card");

            const title = document.createElement("h3");
            title.innerText = taskTitle;

            const description = document.createElement("p");
            description.innerText = taskDescription;

            taskCard.appendChild(title);
            taskCard.appendChild(description);

            addNew.parentElement.appendChild(taskCard);


            modalOverlay.remove();
        });
    });
});