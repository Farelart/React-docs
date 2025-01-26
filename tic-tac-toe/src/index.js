
let tasks = [{ id: 1, title: "Write a report", completed: false }];

function markTaskAsCompleted(taskId, taskList) {
  // Creates a new tasks array with the updated task
  return taskList.map((t) =>
    t.id === taskId ? { ...t, completed: true } : t
  );
}

function deleteIncompleteTasks(taskList) {
  // Filters tasks without relying on shared state
  return taskList.filter((t) => !t.completed);
}

// Execution
let updatedTasks = markTaskAsCompleted(1, tasks); // Creates a new tasks array
let finalTasks = deleteIncompleteTasks(updatedTasks); // Deletes incomplete tasks
console.log(tasks);       // [{ id: 1, title: "Write a report", completed: false }]
console.log(finalTasks);  // [{ id: 1, title: "Write a report", completed: true }]

