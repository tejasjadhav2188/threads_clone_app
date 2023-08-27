import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  image: String,
  bio: String,
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
  members:[
    {
       type: mongoose.Schema.Types.ObjectId,
       ref:'User' 
    }
  ]
});

const Community = mongoose.models.Community || mongoose.model('Community',communitySchema)

//if the model is already in database then 1st statement will be executed else model will be created using 2nd statement

export default Community;
