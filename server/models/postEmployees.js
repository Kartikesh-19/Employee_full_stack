import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    name:String,
    dob:String,
    salary:String,
    joining_date:String,
    relieving_date:String,
    contact_number:Number,
    status:String,
    createdAt:{
        type:Date,
        default:new Date()
    }
});

const PostEmployeesSchema=mongoose.model('postEmployees',postSchema);
export default PostEmployeesSchema;