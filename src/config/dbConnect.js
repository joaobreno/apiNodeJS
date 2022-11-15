import mongoose from "mongoose"

mongoose.connect("mongodb+srv://joaobreno:jbpo95@alura.s7pno9p.mongodb.net/alura-node");

let db = mongoose.connection;

export default db