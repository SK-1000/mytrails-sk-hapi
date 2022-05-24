export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret",
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
    lisa: {
      firstName: "Lisa",
      lastName: "Simpson",
      office: "President",
    },
    donald: {
      firstName: "Donald",
      lastName: "Simpson",
      office: "President",
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
      traillist: "->traillists.lisa",
    },
    two: {
      trailname: "Demense",
      distancekm: 90,
      terraindescription: "flat",
      lat: "52.149220",
      lng: "-6.994620",
      trailfinder: "->users.marge",
      traillist: "->traillists.lisa",
    },
    three: {
      trailname: "Tomies",
      distancekm: 430,
      terraindescription: "steep",
      lat: "52.161290",
      lng: "-7.231540",
      trailfinder: "->users.homer",
      traillist: "->traillists.donald",
    },
  },
};
