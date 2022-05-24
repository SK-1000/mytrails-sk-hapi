import { Trail } from "./trail.js";

export const trailMongoStore = {
  async getAllTrails() {
    const trails = await Trail.find().populate("trailfinder").populate("traillist").lean();
    return trails;
  },

  async getTrailsByTraillist(id) {
    const trails = await Trail.find({ traillist: id });
    return trails;
  },

  async addtrail(trailname, distancekm, terraindescription, trailfinder, traillist, lat, lng) {
    const newTrail = new Trail({
      trailname,
      distancekm,
      terraindescription,
      trailfinder: trailfinder._id,
      traillist: traillist._id,
      lat,
      lng,
    });
    await newTrail.save();
    return newTrail;
  },

  async deleteAll() {
    await Trail.deleteMany({});
  },
};
