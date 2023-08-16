import { NextResponse } from "next/server";
import Post from "../../../models/Post"
import connect from "../../../utils/db"



// export const GET = async () => {
//     return new NextResponse("It works", { status: 200 });
// }

// export const GET = async () => {
//     try {
//         await connect();

//         const posts = await Post.find();
//         return new NextResponse(posts, {status : 200});
//     }catch(err)
//     {
//         return new NextResponse("Database Error", {status : 500});
//     }
// };

export const GET = async (request, {params}) => {
    const { id } = params;

    try {
        await connect();
        const post = await Post.findById(id);

        return new NextResponse(JSON.stringify(post), {status: 200});
    }catch(err) {
        return new NextResponse("Database Error", {status:500});
    }
} 