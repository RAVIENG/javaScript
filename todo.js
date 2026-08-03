let todo = [];

let req = prompt("Enter your request");

while (true) {
    if (req === "quit") {
        console.log("Quitting app");
        break;
    }
    else if (req === "list") {
        console.log("------------");
        for (let i=0; i<todo.length; i++) {
            console.log(i + " " + todo[i]);
        }
    }
    else if (req === "add") {
        let task = prompt("Please enter your task");
        todo.push(task);
        console.log("Task added");
    }else if(req == "delete"){
        let idx = prompt("enter the idx you want to delete");
        todo.splice(idx, 1);
        console.log("task deleted");
    }else{
        console.log("wrong request");
    }

    req = prompt("Enter your request");
}

//to do app 2
let btn = document.querySelector(".btn");
let input = document.querySelector(".input");
let task = document.querySelector("ul");

btn.addEventListener("click", function () {
    let li = document.createElement("li"); 
    li.innerText = input.value;            

    task.append(li);                       

    input.value = "";                      
});