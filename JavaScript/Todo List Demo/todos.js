let input = prompt("What would you like to do?");

const todos = [];

while (input !== "quit") {
    if (input === "new") {
        todos.push(prompt("Enter new todo:"));
    } else if (input === "list") {
        console.log("********");
        for (let todo of todos) {
            console.log(`${todos.indexOf(todo)}: ${todo}`);
        }
        console.log("********");
    } else if (input === "delete") {
        let deleteIndex = prompt("Enter index of todo to delete:")
        todos.splice(deleteIndex, 1);
        console.log("Todo removed.");
    } else {
        console.warn("Invalid input. Try Again.");
    }

    input = prompt("What would you like to do?")
}

console.log("OK. You quit the app.");