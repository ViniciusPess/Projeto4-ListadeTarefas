function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task !== "") {
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.innerText = task;

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "&#10060;";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", removeTask);

    li.appendChild(removeButton);
    taskList.appendChild(li);

    input.value = "";
  }
}

function removeTask() {
  const li = this.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);
}

document.addEventListener("DOMContentLoaded", function() {
  const taskList = document.getElementById("taskList");

  taskList.addEventListener("click", function(event) {
    const target = event.target;

    if (target.tagName === "LI") {
      target.classList.toggle("completed");
    }
  });
});
