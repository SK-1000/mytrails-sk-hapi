import Mongoose from "mongoose";

const { Schema } = Mongoose;

const traillistSchema = Schema({
  firstName: String,
  lastName: String,
  office: String
});

export const Traillist = Mongoose.model("Traillist", traillistSchema);
