import { db } from "../models/db.js";
import { imageStore } from "../models/image-store.js";

export const trailsController = {
  index: {
    handler: async function (request, h) {
      const traillists = await db.traillistStore.getAllTraillists();
      return h.view("Addtrail", { title: "Add a new Trail", traillists: traillists });
    },
  },
  report: {
    handler: async function (request, h) {
      const trails = await db.trailStore.getAllTrails();
      let total = 0;
      trails.forEach((trail) => {
        total += trail.distancekm;
      });
      return h.view("Report", {
        title: "Trails added to Date",
        trails: trails,
        total: total,
      });
    },
  },
  addtrail: {
    handler: async function (request, h) {
      try {
        const loggedInUser = request.auth.credentials;
        const rawTraillist = request.payload.traillist.split(",");
        const traillist = await db.traillistStore.findByName(rawTraillist[0], rawTraillist[1]);
        await db.trailStore.addtrail(request.payload.trailname, request.payload.distancekm, request.payload.terraindescription, loggedInUser._id, traillist._id);
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
 
  // added upload image code

  uploadImage: {
    handler: async function(request, h) {
      try {
        const trail = await db.trailStore.getTrailById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          trail.img = url;
          db.trailStore.updateTrail(trail);
        }
        return h.redirect(`/trail/${trail._id}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/trail/${trail._id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true
    }
  }


};
