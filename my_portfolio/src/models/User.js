import mongoose from "mongoose"

const { Schema } = mongoose;


const userSchema = new Schema (
{
    name: {
        type: String,
        unique:true,
        required : true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type : String,
        required: true,
    },
},
{
    timestamps: true
}

);


// create a user collection in our database


export default mongoose.model("User", userSchema);