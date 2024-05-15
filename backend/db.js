const mongoose = require("mongoose");
const db ="mongodb+srv://arunodyap:apm1234@cluster0.dg1fu3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// validate that the query according to model schema
mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    
  }
};
module.exports = connectDB;