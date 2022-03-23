let helpfunc =require("./Commands/help");
let organizefunc = require("./Commands/organize");
let treeFunc=require("./Commands/tree");
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

console.log(command);
console.log(path);

switch (command) {  //organize
    case "tree":
        console.log("Tree function called and executed succesfull on path" + path);
        treeFunc.tree(path);
        break;

    case "organize":
        // console.log("Organize function called and executed successfully on path" + path);
        console.log(path);
       // organizefunc.organizefm(path);
        break;

    case "help":
        console.log("Help command executed");
        break;

    default:
        console.log("command not recognized");
        break;
}