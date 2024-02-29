const { Schema,model, default: mongoose } =require( "mongoose")


const TodoModel = new Schema({

  title: {
    type:String,
    required:true
  },
  creator: {
    type:String,
  },
  description: {
    type:String
  },
 
},
{
  timestamps: true,
}
);

const Todo = model('todo-list', TodoModel);

module.exports= Todo