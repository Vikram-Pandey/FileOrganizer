const path=require("path");
const fs=require("fs");


function printTree(srcPath){
fs.readdir(srcPath,(err,files)=>{
    if(err){
        console.log(err);
    }

    else{
        console.log("files in "+path.basename(srcPath)+ " Directory");
        files.forEach(file=>{
            let name=path.join(srcPath,file);
            let isDirectory=fs.statSync(name).isDirectory();

            if(!isDirectory){
            
            console.log(file.toString());
            }
            else{
                console.log(file.toString());
                printTree(name);
            }
        });
    }
});
}


module.exports={
    tree:printTree
}
