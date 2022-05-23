import { userMongoStore } from "./mongo/user-mongo-store.js";
import { trailMongoStore } from "./mongo/trail-mongo-store.js";
import { traillistMongoStore } from "./mongo/traillist-mongo-store.js";
import { connectMongo } from "./mongo/connect.js";

export const db = {
  userStore: null,


  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        this.trailStore = trailMongoStore;
        this.traillistStore = traillistMongoStore;
        connectMongo();
        break;
      default:
    }
  },
};
