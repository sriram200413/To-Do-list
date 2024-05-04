const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container"); 

function addTask() {
    const taskText = inputBox.value.trim(); // Remove leading and trailing spaces
    if (!taskText) { // Check if taskText is empty or contains only spaces
        alert("You must write something");
        return; // Exit the function if input is empty
    }

    const li = document.createElement("li");
    li.textContent = taskText;
    listContainer.appendChild(li);

    const span = document.createElement("span");
    span.textContent = "\u00d7";
    span.className = "close"; 
    li.appendChild(span);

    inputBox.value = '';

    saveData(); // Save data after adding a task
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData(); // Save data after marking or removing a task
}, false);

function saveData() {
    localStorage.setItem("todoList", listContainer.innerHTML);
}

function showTasks() {
    const savedTasks = localStorage.getItem("todoList");
    if (savedTasks) {
        listContainer.innerHTML = savedTasks;
    }
}

showTasks(); // Call the function to show tasks when the page loads




