import mongoose from 'mongoose';

const conversationSchema = mongoose.Schema(
{
   members: [String],},
{timestamps:true } 
);
var Conversation = mongoose.model("Conversation",conversationSchema)
export default Conversation;