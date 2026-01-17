import mongoose from "mongoose";


export interface IUser extends Document{
    name: string;
    email: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const UserSchema = new mongoose.Schema<IUser>({
    name: {type:String, required:true, trim:true},
    email: {type:String, required:true, trim:true,unique:true,lowercase:true},
    password:{type:String,required:true}

},{timestamps:true}) //by using timestamps automatically creates created at 

const User = mongoose.models.User || mongoose.model<IUser>('User',UserSchema)
//it will create the user model 

export default User;