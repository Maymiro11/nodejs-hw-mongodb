import mongoose from "mongoose";

const { Schema, model } = mongoose;

const contactSchema  = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: false, },
    isFavourite: { type: Boolean, default: false, required: false, },
    contactType: {
      type: String,
      enum: ["work", "home", "personal"],
      default: "personal",
      required: true,
    },
  },
  { timestamps: true }
);

export const ContactsCollection = model("contacts", contactSchema);
