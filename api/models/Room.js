import mongoose from 'mongoose';
const { Schema } = mongoose;

const roomSchema = new Schema({
    roomTitle: {
        type: String,
        required: true,
    },
    roomPrice: {
        type: Number,
        required: true,
    },
    maxCapacity: {
        type: Number,
        required: true,
    },
    roomDescription: {
        type: String,
        required: true,
    },
    // roomImage: {
    //     type: String,
    //     default: "",
    // },
    // roomOwner: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true,
    // },
    // roomHotel: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Hotel",
    //     required: true,
    // },
    roomNumber:[{number: Number, unavailableDates: {type: [Date], default: []} }],
},
{ timestamps: true }//created at and updated at timestamps
);




export default mongoose.model("Room", roomSchema);