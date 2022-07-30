const fs =require('fs');

fs.writeFile('anwar.txt',"welcome Anwar ",(err)=>{
   if (err){
    console.log(error)
   }

   else{
    console.log("SuccessFull")
   }
})