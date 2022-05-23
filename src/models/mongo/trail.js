import Mongoose from "mongoose";

const { Schema } = Mongoose;

const trailSchema = new Schema({
  amount: Number,
  method: String,
  trailfinder: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  traillist: {
    type: Schema.Types.ObjectId,
    ref: "Traillist",
  },
});

export const Trail = Mongoose.model("Trail", trailSchema);
