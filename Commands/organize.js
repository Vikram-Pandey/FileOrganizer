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
   let fileextension=path.extname(allFiles[i]);
   console.log("FileExtension"+fileextension);
}


}

let srcPath="F:\\Vikram\\FJP-5\\FileOrganizer\\Downloads";
organize(srcPath);