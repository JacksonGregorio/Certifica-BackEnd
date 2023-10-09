import mongoose from "mongoose";

mongoose.connect("mongodb+srv://This is a secret");

let db = mongoose.connection;

export default db;