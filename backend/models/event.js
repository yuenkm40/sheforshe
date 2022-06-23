import mongoose from 'mongoose';

const eventSchema = mongoose.Schema(
    {title: { type: String, required: true },
    description: { type: String, required: true },
    //Img as base 64 string
    image: { type: String, required: true },
    type: { type: String, required: true },
    address: { type: String, required: true },
    date: { type: String, required:true },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
    },
);
 
 export default mongoose.model("Event", eventSchema)