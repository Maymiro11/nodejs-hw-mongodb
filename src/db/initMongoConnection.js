import mongoose from "mongoose";
import { env } from "../utils/env.js";

export const initMongoConnection = async () => {
  try {
    const user = env("MONGO_USER", "defaultUser");
    const pwd = env("MONGO_PASSWORD", "defaultPassword");
    const url = env("MONGODB_URL", "defaultUrl");
    const db = env("MONGODB_DB", "defaultDB");

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Mongo connection successfully established!");
  } catch (e) {
    console.log("Error while setting up mongo connection", e);
    throw e;
  }
};
