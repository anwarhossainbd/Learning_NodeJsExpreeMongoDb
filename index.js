const fs= require('fs');

fs.unlink("anwar.txt",(error)=>{

   if(error){
      console.log(error)
   }else{
      console.log("Successfull ")
   }
})