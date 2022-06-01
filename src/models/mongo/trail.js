import Mongoose from "mongoose";

const { Schema } = Mongoose;

const trailSchema = new Schema({
  trailname: String,
  distancekm: Number,
  terraindescription: String,
  lat: String,
  lng: String,
  img: String, // added for trail image
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
