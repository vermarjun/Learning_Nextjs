import { connectToDatabase } from "@/lib/db";
import { UserModel } from "@/models/User";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest){
    await connectToDatabase()

    const {username , password} = await req.json()
    
    if (!username || !password) {
        return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
    }

    const user = await UserModel.findOne({ username });
    if (user) {
        return NextResponse.json({ error: "User already exists" }, { status: 404 });
    }
    
    const newUser = new UserModel({
        username: username,
        password: password
    })

    await newUser.save()
    
    return NextResponse.json({ message: "Created", user });
}