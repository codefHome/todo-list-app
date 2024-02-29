const mongoose =require("mongoose")

const settings = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
const connection= async()=>{
 
      
        const dbUrl=`mongodb://mongodb:27017/todo`
        await mongoose.connect(dbUrl,settings).then(()=>{
            console.log("Connected to the DB")
        }).catch((e)=>{
            console.log("Error",e)
        })
        
        
  
}
module.exports= connection