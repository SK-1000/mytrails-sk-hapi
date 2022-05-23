export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "$2a$10$u78FxyljUXwDp37q.3TH6e07kC1cU5WaYNP7qYZ5SA8TqmfSP76Yy",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "$2a$10$CynHIuoM9EgmAMpoNb4kReSbf73EAJqep3Y6w/HJbqj4WKL7T4TKW",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "s$2a$10$V17/IdKsOJ8bC5l.UBc2suwUgMN00HxJLWleVwGKcbnesK5uCY/0i",
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
      amount: 40,
      method: "paypal",
      lat: "52.160858",
      lng: "-7.152420",
      trailfinder: "->users.bart",
      traillist: "->traillists.lisa",
    },
    two: {
      amount: 90,
      method: "direct",
      lat: "52.149220",
      lng: "-6.994620",
      trailfinder: "->users.marge",
      traillist: "->traillists.lisa",
    },
    three: {
      amount: 430,
      method: "paypal",
      lat: "52.161290",
      lng: "-7.231540",
      trailfinder: "->users.homer",
      traillist: "->traillists.donald",
    },
  },
};






// export const seedData = {
//   users: {
//     _model: "User",
//     homer: {
//       firstName: "Homer",
//       lastName: "Simpson",
//       email: "homer@simpson.com",
//       password: "$2a$10$DaiXdOMumxXthk2e.AWNZuA11ZTacU9Cd7u4IRSceY.yVpE3S8hQC",
//     },
//     marge: {
//       firstName: "Marge",
//       lastName: "Simpson",
//       email: "marge@simpson.com",
//       password: "$2a$10$O2awhpkcgtuCUOZ4s9hMKu4nm1.Po3xMkOSmOmdCE9ljaksn.4trOt",
//     },
//     bart: {
//       firstName: "Bart",
//       lastName: "Simpson",
//       email: "bart@simpson.com",
//       password: "$2a$10$3Nf9PlLw7rO45QdyjTF1xe.4TzUs4uzNsdx2eggWQwY4IWSpCP9ou",
//     },
//   },
//   traillists: {
//     _model: "Traillist",
//     lisa: {
//       firstName: "Lisa",
//       lastName: "Simpson",
//       office: "President",
//     },
//     donald: {
//       firstName: "Donald",
//       lastName: "Simpson",
//       office: "President",
//     },
//   },
//   trails: {
//     _model: "Trail",
//     one: {
//       amount: 40,
//       method: "paypal",
//       lat: "52.160858",
//       lng: "-7.152420",
//       trailfinder: "->users.bart",
//       traillist: "->traillists.lisa",
//     },
//     two: {
//       amount: 90,
//       method: "direct",
//       lat: "52.149220",
//       lng: "-6.994620",
//       trailfinder: "->users.marge",
//       traillist: "->traillists.lisa",
//     },
//     three: {
//       amount: 430,
//       method: "paypal",
//       lat: "52.161290",
//       lng: "-7.231540",
//       trailfinder: "->users.homer",
//       traillist: "->traillists.donald",
//     },
//   },
// };
