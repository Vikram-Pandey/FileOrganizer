const fs=require("fs");
const path=require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}


function organize(srcPath){
    if(srcPath==undefined){
        console.log(srcPath);
        srcPath=process.cwd();
        console.log("Source Path"+srcPath);
    }



let organizedFiles=path.join(srcPath,"Organized_Files");
console.log("organized files folder path:",organizedFiles);
if(!fs.existsSync(organizedFiles)){
    fs.mkdirSync(organizedFiles);
}

else{
    console.log("Folder already exists");
}



//Scan the entire srcfolder
//reads all the files inside the directory.
let allFiles=fs.readdirSync(srcPath);

console.log(allFiles);

//traverse over all the files from allFiles

for(let i=0; i<allFiles.length; i++){
   // let fileextension=allFiles[i].split(".")[1];
   

   //1. check if it is file or folder
   //1.1 if file get ext name
   //1.2 get folder name where we need to put that file
   //1.3 copy from src folder to destination folder.

   let fullPathOfFile=path.join(srcPath,allFiles[i]);

   //lstatSync gives information about the link provided;
   let isFile=fs.lstatSync(fullPathOfFile).isFile();

   if(isFile){
    let fileextension=path.extname(allFiles[i]).substring(1);
    //console.log(fileextension);
    //get foldername from types above
    let folderName=getFolderName(fileextension);
   // console.log(folderName);

    //copy from src to destination

    copyFileToDest(srcPath,fullPathOfFile,folderName);
   }
}


}

function getFolderName(fileextension){
  for(let key in types){
    //   console.log(key);
    for(let i=0;i<types[key].length;i++){
        if(types[key][i]==fileextension){
            return key;
        }
    }
  }

  return "misc";

}


function copyFileToDest(srcPath,fullPathOfFile,folderName){

    let destFolderPath=path.join(srcPath,"Organized_Files",folderName);
    if(!fs.existsSync(destFolderPath)){
        fs.mkdirSync(destFolderPath);
    }

    //destination file path

    let fileName=path.basename(fullPathOfFile); // returns .exe

    let destFileName=path.join(destFolderPath,fileName);


    //copy file from src folder to dest folder
    fs.copyFileSync(fullPathOfFile,destFileName);


}


let srcPath="F:\\Vikram\\FJP-5\\FileOrganizer\\Downloads";
organize(srcPath);


module.exports={
    organizefm:organize
}