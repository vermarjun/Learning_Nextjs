import { connectToDatabase } from "@/lib/db";
import { UserModel } from "@/models/User";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest){
    await connectToDatabase()
    const {username , password} = await req.json()
    console.log(username, password);
    
    if (!username || !password) {
        return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
    }

    const user = await UserModel.findOne({ username });
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.password !== password) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ message: "Done", user });
}