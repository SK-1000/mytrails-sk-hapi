import Boom from "@hapi/boom";
import bcrypt from "bcrypt"; // added
import { db } from "../models/db.js";
import { createToken } from "./jwt-utils.js";


const saltRounds = 10;   // added




export const userApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const users = await db.userStore.getAllUsers();
        return users;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const user = await db.userStore.getUserById(request.params.id);
        if (!user) {
          return Boom.notFound("No User with this id");
        }
        return user;
      } catch (err) {
        return Boom.serverUnavailable("No User with this id");
      }
    },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
      try {
        const user = await db.userStore.addUser(request.payload);
        if (user) {
          return h.response(user).code(201);
        }
        return Boom.badImplementation("error creating user");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  // create: {
  //   auth: false,
  //   handler: async function (request, h) {
  //     try {
  //       const user = request.payload;
  //     user.password = await bcrypt.hash(user.password, saltRounds);    
  //     await db.userStore.addUser(user);
  //       if (user) {
  //         return h.response(user).code(201);
  //       }
  //       return Boom.badImplementation("error creating user");
  //     } catch (err) {
  //       return Boom.serverUnavailable("Database Error");
  //     }
  //   },
  // },



  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await db.userStore.deleteAll();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  authenticate: {
    auth: false,
    handler: async function (request, h) {
      try {
        const user = await db.userStore.getUserByEmail(request.payload.email);
        if (!user) {
          return Boom.unauthorized("User not found");
        } else if (user.password !== request.payload.password) {
          return Boom.unauthorized("Invalid password");
        } else {
          const token = createToken(user);
          return h.response({ success: true, token: token }).code(201);
        }
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },


//   authenticate: {
//     auth: false,
//     handler: async function (request, h) {
//         try {
//             const {password} = request.payload;
//             const user = await db.userStore.getUserByEmail(request.payload.email);
//             const passwordsMatch = await bcrypt.compare(password, user.password);
//             if (!user) {
//                 return Boom.unauthorized("User not found");
//             }
//             if (!user || !passwordsMatch) {
//                 return Boom.unauthorized("Invalid password");
//             }
//             const token = createToken(user);
//             return h.response({success: true, token: token}).code(201);
//         } catch (err) {
//             return Boom.serverUnavailable("Database Error");
//         }
//     },
// },






};

