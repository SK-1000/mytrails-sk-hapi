import { accountsController } from "./controllers/accounts-controller.js";
import { trailsController } from "./controllers/trails-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/addtrail", config: trailsController.index },
  { method: "POST", path: "/addtrail", config: trailsController.addtrail },
  { method: "GET", path: "/report", config: trailsController.report },
  { method: "POST", path: "/trail/{id}/uploadimage", config: trailsController.uploadImage },  // added as part of adding image per trail

  {
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: "./public",
      },
    },
    options: { auth: false },
  },
];
