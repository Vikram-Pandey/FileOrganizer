let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];

switch(command){  //organize
    case "tree":
        console.log("Tree function called and executed succesfull on path"+path);
        break;

        case "organize":
            console.log("Organize function called and executed successfully on path"+path);
            break;

            case "help":
        console.log();
        break;

        case "tree":
        console.log();
        break;
}