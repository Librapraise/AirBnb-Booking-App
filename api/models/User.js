import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: "",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isHotelOwner: {
        type: Boolean,
        default: false,
    },
    isRoomOwner: {
        type: Boolean,
        default: false,
    },
    isCustomer: {
        type: Boolean,
        default: true,
    },
},
{ timestamps: true }//created at and updated at timestamps
);

export default mongoose.model("User", userSchema);