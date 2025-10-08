const fs = require("fs");

//Creating and writting a file :

// fs.writeFileSync("./test.txt",'hello world sync');
 fs.writeFile("./test.txt", 'async creation of file', (err)=>{});


 //For reading a existing file :
  
//  const read = fs.readFileSync("./contact.txt","Utf-8")
//  console.log(read)


// fs.readFile("./contact.txt" ,"Utf-8", (err,result) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(result)
//     }
// })


//for appending something in existing file : 

// fs.appendFileSync("test.txt",new Date().getDate().toLocaleString());

// fs.appendFileSync("test.txt",`hey coders\n`)
// fs.appendFile("test.txt" ,` hello`,()=>{});

//for copying something from existing file to another file :
// fs.cpSync("./test.txt" ,"./copy.txt");


//Delete a file:
// fs.unlinkSync("./copy.txt");

//details of a file :
// console.log(fs.statSync("./test.txt"));


//derectories of a new folder :
fs.mkdirSync(`my-docs/a/b`,{recursive:true});
