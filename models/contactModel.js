import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
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