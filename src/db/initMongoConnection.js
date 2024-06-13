import mongoose from "mongoose";
import { env } from "../utils/env.js";

export const initMongoConnection = async () => {
    try {
      const user = env("MONGO_USER");
      const pwd = env("MONGO_PASSWORD");
      const url = env("MONGODB_URL");
      const db = env("MONGODB_DB");

      await mongoose.connect(
        `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Contacts`,
      );
      console.log("Mongo connection successfully established!");
    } catch (e) {
      console.log("Error while setting up mongo connection", e);
      throw e;
    }
  };

  //mongodb+srv://elenkinakh:8cGlaVg0RWmfZFFQ@contacts.scv6dti.mongodb.net/contacts?retryWrites=true&w=majority&appName=Contacts
//`mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`
