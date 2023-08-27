import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  text : {type: String,required: true},
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
  },
  community:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Community',
  },
  createdAt:{
    type:Date,
    default:Date.now,
  },
  parentId:{
    type:String,
  },
  children:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Thread'
  }]
});

const Thread = mongoose.models.Thread || mongoose.model('Thread',threadSchema)

//if the model is already in database then 1st statement will be executed else model will be created using 2nd statement

export default Thread;
