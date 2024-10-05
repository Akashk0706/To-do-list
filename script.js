function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${taskInput.value} <button class="remove-task" onclick="removeTask(this)">Remove</button>`;
        taskList.appendChild(li);
        taskInput.value = ""; // Clear input after adding
    } else {
        alert("Please enter a task!");
    }
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

// Initialize task arrays
let tasks = []; // Active tasks
let completedTasks = []; // Completed tasks
let pendingTasks = []; // Pending tasks

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        tasks.push(taskText); // Add the task to the main list
        taskInput.value = ''; // Clear the input
        renderTasks(); // Render tasks
    }
}

// Function to render active tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the current task list

    // Display all tasks
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        
        // Add buttons to mark as completed or pending
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = () => completeTask(index); // Complete task on click
        li.appendChild(completeButton);
        
        const pendingButton = document.createElement('button');
        pendingButton.textContent = 'Pending';
        pendingButton.onclick = () => markAsPending(index); // Mark as pending on click
        li.appendChild(pendingButton);

        taskList.appendChild(li);
    });
}

// Function to complete a task
function completeTask(index) {
    completedTasks.push(tasks[index]); // Add the task to completed tasks
    tasks.splice(index, 1); // Remove it from the main list
    renderTasks(); // Re-render the task list
}

// Function to mark a task as pending
function markAsPending(index) {
    pendingTasks.push(tasks[index]); // Add to pending tasks
    tasks.splice(index, 1); // Remove from active tasks
    renderTasks(); // Re-render active tasks
}

// Function to display completed tasks
function showCompletedTasks() {
    const activeTasksContainer = document.getElementById('activeTasksContainer');
    const completedTasksContainer = document.getElementById('completedTasksContainer');
    const pendingTasksContainer = document.getElementById('pendingTasksContainer');
    
    activeTasksContainer.style.display = 'none'; // Hide active tasks
    pendingTasksContainer.style.display = 'none'; // Hide pending tasks
    completedTasksContainer.style.display = 'block'; // Show completed tasks

    const completedTaskList = document.getElementById('completedTaskList');
    completedTaskList.innerHTML = ''; // Clear current completed task list

    // Display completed tasks
    completedTasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task;
        completedTaskList.appendChild(li);
    });
}

// Function to display pending tasks
function showPendingTasks() {
    const activeTasksContainer = document.getElementById('activeTasksContainer');
    const completedTasksContainer = document.getElementById('completedTasksContainer');
    const pendingTasksContainer = document.getElementById('pendingTasksContainer');
    
    activeTasksContainer.style.display = 'none'; // Hide active tasks
    completedTasksContainer.style.display = 'none'; // Hide completed tasks
    pendingTasksContainer.style.display = 'block'; // Show pending tasks

    const pendingTaskList = document.getElementById('pendingTaskList');
    pendingTaskList.innerHTML = ''; // Clear current pending task list

    // Display pending tasks
    pendingTasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task;
        pendingTaskList.appendChild(li);
    });
}

// Function to show active tasks again
function showActiveTasks() {
    const activeTasksContainer = document.getElementById('activeTasksContainer');
    const completedTasksContainer = document.getElementById('completedTasksContainer');
    const pendingTasksContainer = document.getElementById('pendingTasksContainer');

    activeTasksContainer.style.display = 'block'; // Show active tasks
    completedTasksContainer.style.display = 'none'; // Hide completed tasks
    pendingTasksContainer.style.display = 'none'; // Hide pending tasks
}
