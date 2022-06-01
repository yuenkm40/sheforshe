import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    name:String,
    occupation: String,
    tags: [String],
    selectedFile:String,
    description:String,
});

const PostDesc = mongoose.model('PostDesc', postSchema);
export default PostDesc;