const mongoose =require("mongoose")

const settings = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
const connection= async()=>{
 
<<<<<<< HEAD
      
=======
        const user=process.env.USER
        const password=process.env.PASSWORD
        const db=process.env.DB
     
>>>>>>> e6a262a9070a42463596f66b53a2913e39113fa8
        const dbUrl=`mongodb://mongodb:27017/todo`
        await mongoose.connect(dbUrl,settings).then(()=>{
            console.log("Connected to the DB")
        }).catch((e)=>{
            console.log("Error",e)
        })
        
        
  
}
module.exports= connection