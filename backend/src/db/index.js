import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log(
      `MongoDB connected || DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MONGODB connection failed`, error);
    process.exit(1);
  }
};

export default connectionDB;
