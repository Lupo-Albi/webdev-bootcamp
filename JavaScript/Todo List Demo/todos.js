let input = prompt("What would you like to do?");

const todos = [];

while (input !== "quit" && input !== "q") {
    if (input === "new") {
        const newTodo = prompt("Enter new todo:");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (input === "list") {
        console.log("********");
        for (let todo of todos) {
            console.log(`${todos.indexOf(todo)}: ${todo}`);
        }
        console.log("********");
    } else if (input === "delete") {
        const deleteIndex = parseInt(prompt("Enter index of todo to delete:"));
        if (!Number.isNaN(deleteIndex)) {
            const deleted = todos.splice(deleteIndex, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index');
        }
    } else {
        console.warn("Invalid input. Try Again.");
    }

    input = prompt("What would you like to do?")
}

console.log("OK. You quit the app.");