import mongoose, { Schema, Document, Model } from "mongoose";

// export interface IUser extends Document {
//   email: string;
//   password: string;
// }

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  }
);

// export const User: Model<IUser> =
//   mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

const UserModel = mongoose.model("users", UserSchema);

export {
  UserModel
}
