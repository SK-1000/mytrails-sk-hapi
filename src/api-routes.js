import { userApi } from "./api/users-api.js";
import { trailsApi } from "./api/trails-api.js";
import { traillistsApi } from "./api/traillists-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/trails", config: trailsApi.findAll },
  { method: "GET", path: "/api/traillists/{id}/trails", config: trailsApi.findByTraillist },
  { method: "POST", path: "/api/traillists/{id}/trails", config: trailsApi.addTrail },
  { method: "DELETE", path: "/api/trails", config: trailsApi.deleteAll },

  { method: "GET", path: "/api/traillists", config: traillistsApi.find },
  { method: "GET", path: "/api/traillists/{id}", config: traillistsApi.findOne },
  { method: "POST", path: "/api/traillists", config: traillistsApi.create },
  { method: "DELETE", path: "/api/traillists/{id}", config: traillistsApi.deleteOne },
  { method: "DELETE", path: "/api/traillists", config: traillistsApi.deleteAll },
];
