import { type } from "express/lib/response";
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema ({
    name: {
        type: String,
        required: 'Enter a first name'
    },
    price: {
        type: Number
    }
});
