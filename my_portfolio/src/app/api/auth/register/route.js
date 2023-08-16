import connect from "../../../../utils/db"
import User from  "../../../../models/User"
import bcrypt from "bcryptjs"


export const POST = async (request) => {
    const { name, email , password} = await request.json();

    await connect();

    const hashedPassword = await bcrypt.hash(password, 5);


    //lets create new user using those credentials
    const newUser = User (
        {
            name,
            email,
            password: hashedPassword,
        }
    );
    
    try{
            //save this user in the mongodb
            await newUser.save();
        return new NextResponse("user has been created", {
            status: 201,
        })

    }catch(err){
        return new NextResponse(err.message, {
            status: 500,
        });
    }
}