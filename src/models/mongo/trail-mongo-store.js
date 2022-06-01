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
//  added a new method to update Trail with image
  async updateTrail(updatedTrail) {
    const trail = await Trail.findOne({ _id: updatedTrail._id });
    trail.trailname = updatedTrail.trailname;
    trail.distancekm = updatedTrail.trailname;
    trail.terraindescription = updatedTrail.terraindescription;
    trail.trailfinder = updatedTrail.trailfinder;
    trail.traillist = updatedTrail.traillist;
    trail.lat = updatedTrail.lat;
    trail.lng = updatedTrail.lng;
    trail.img = updatedTrail.img;
    await trail.save();
  },

  async deleteAll() {
    await Trail.deleteMany({});
  },
};
