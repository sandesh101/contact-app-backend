import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, "Please enter name"]
    },
    email: {
        type: String,
        required: [true, "Please enter email"]
    },
    phone: {
        type: String,
        required: [true, "Please enter phone"]
    },
},
    {
        timestamps: true,
    }
);

const contactModel = mongoose.model("Contact", contactSchema);

export { contactSchema, contactModel };