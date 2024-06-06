import mongoose from "mongoose";

const UserSchema = mongoose.Schema({    
    name: String,
    email: String,
    password: String,
    links: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Links'
      }]
});

export default mongoose.model("Users", UserSchema);