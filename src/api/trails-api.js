import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const trailsApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const trails = db.trailStore.getAllTrails();
      return trails;
    },
  },
  findByTraillist: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const trails = await db.trailStore.getTrailsByTraillist(request.params.id);
      return trails;
    },
  },

  addTrail: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const traillist = await db.traillistStore.findById(request.params.id);
      if (!traillist) {
        return Boom.notFound("No Traillist with this id");
      }
      const trail = await db.trailStore.addtrail(
        request.payload.trailname,
        request.payload.distancekm,
        request.payload.terraindescription,
        request.auth.credentials,
        traillist,
        request.payload.lat,
        request.payload.lng,
      );
      return trail;
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await db.trailStore.deleteAll();
      return { success: true };
    },
  },
};
