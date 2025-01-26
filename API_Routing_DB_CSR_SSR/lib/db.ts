import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

declare global {
  var connectDb: boolean
}

if (!MONGODB_URI) {
  throw new Error("No mongoDb url found");
}

let connected = global.connectDb;

export async function connectToDatabase() {
  if (connected) {
    return;
  }
  try{
    await mongoose.connect(MONGODB_URI)
    global.connectDb = true;
    console.log("Mongoose connected")
  } catch(e){
    console.log(e)
  }
}
