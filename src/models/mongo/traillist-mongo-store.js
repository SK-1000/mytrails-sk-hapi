import { Traillist } from "./traillist.js";

export const traillistMongoStore = {
  async getAllTraillists() {
    const traillists = await Traillist.find().lean();
    return traillists;
  },

  async findById(id) {
    const traillist = await Traillist.findOne({ _id: id }).lean();
    return traillist;
  },

  async findByName(lastName, firstName) {
    const traillist = await Traillist.findOne({
      lastName,
      firstName,
    });
    return traillist;
  },
};
