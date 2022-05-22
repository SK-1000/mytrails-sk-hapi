import { db } from "../models/db.js";

export const trailsController = {
  index: {
    handler: async function (request, h) {
      const traillists = await db.traillistStore.getAllTraillists();
      return h.view("AddTrail", { title: "Add a new Trail", traillists: traillists });
    },
  },
  report: {
    handler: async function (request, h) {
      const trails = await db.trailStore.getAllTrails();
      let total = 0;
      trails.forEach((trail) => {
        total += trail.amount;
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
        await db.trailStore.addtrail(request.payload.amount, request.payload.method, loggedInUser._id, traillist._id);
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
};
