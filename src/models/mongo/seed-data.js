export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "s$2a$10$6mg.JkGEKLWE1gUzH8RqiehH6u5NtHxDnnAvPO1SAMGToe37Fw./y",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret",
    },
  },
  traillists: {
    _model: "Traillist",
    strolls: {
      title: "Strolls",
    },
    hikes: {
      title: "Hikes",
    },
  },
  trails: {
    _model: "Trail",
    one: {
      trailname: "Mangerton",
      distancekm: 40,
      terraindescription: "steep",
      lat: "52.160858",
      lng: "-7.152420",
      trailfinder: "->users.bart",
      traillist: "->traillists.strolls",
    },
    two: {
      trailname: "Demense",
      distancekm: 90,
      terraindescription: "flat",
      lat: "52.149220",
      lng: "-6.994620",
      trailfinder: "->users.marge",
      traillist: "->traillists.strolls",
    },
    three: {
      trailname: "Tomies",
      distancekm: 430,
      terraindescription: "steep",
      lat: "52.161290",
      lng: "-7.231540",
      trailfinder: "->users.homer",
      traillist: "->traillists.hikes",
    },
  },
};
