import mongoose from "mongoose"

const PostSchema = new Schema (
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


// create a user collection in our database


export default mongoose.model("Post", PostSchema);