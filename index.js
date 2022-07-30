const fs =require('fs');

fs.appendFile('anwar.txt',"Go ahead ",(err)=>{
   if (err){
    console.log(error)
   }

   else{
    console.log("SuccessFull")
   }
})