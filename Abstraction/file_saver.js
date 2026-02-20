

 class FileSaver {

   saveFile(filedata){
    this.#save(filedata);
   }
   #save(filedata){
        console.log("Saving file data: " + filedata);
   }
 }

  const f = new FileSaver();
    f.saveFile("This is the file data to be saved.");