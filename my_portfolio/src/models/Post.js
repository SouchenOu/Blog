import mongoose from "mongoose"

const { Schema } = mongoose;

const postSchema = new Schema (
{
    title: {
        type: String,
        unique:true,
        required : true,
    },
    desc: {
        type: String,
        unique: true,
        required: true,
    },
    content: {
        type : String,
        required: true,
    },
    username: {
        type : String,
        required: true,
    },
},
{
    timestamps: true
}

);


// create a post collection in our database


export default mongoose.model("Post", postSchema);