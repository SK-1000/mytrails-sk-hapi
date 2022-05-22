import Boom from "@hapi/boom";
import { Traillist } from "../models/mongo/traillist.js";

export const traillistsApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const traillists = await Traillist.find();
      return traillists;
    },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const traillist = await Traillist.findOne({ _id: request.params.id });
        if (!traillist) {
          return Boom.notFound("No Traillist with this id");
        }
        return traillist;
      } catch (err) {
        return Boom.notFound("No Traillist with this id");
      }
    },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const newTraillist = new Traillist(request.payload);
      const traillist = await newTraillist.save();
      if (traillist) {
        return h.response(traillist).code(201);
      }
      return Boom.badImplementation("error creating traillist");
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await Traillist.remove({});
      return { success: true };
    },
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const response = await Traillist.deleteOne({ _id: request.params.id });
      if (response.deletedCount == 1) {
        return { success: true };
      }
      return Boom.notFound("id not found");
    },
  },
};
