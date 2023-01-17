import mongoose from "mongoose";

async function connect() {
  await mongoose.connect(
    "mongodb+srv://bishal07:shrestha@mern-app.b7z0xfb.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("MongoDB connection is successful");
}

export default connect;
