import Mongoose from "mongoose";

const { Schema } = Mongoose;

const traillistSchema = Schema({
  title: String,
});

export const Traillist = Mongoose.model("Traillist", traillistSchema);
