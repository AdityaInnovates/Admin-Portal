const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  registrationForm: {
    type: Object,
    required: false,
  },
  clubs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
    },
  ],
  clans: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Clans",
    },
  ],
});

module.exports =
  mongoose.models.Activity || mongoose.model("Activity", eventSchema);

///////// WORK IN PROGRESS ////////

// const mongoose = require("mongoose");

// const CLANS = ["A", "B", "C", "D"];

// const clubSchema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: true,
//     },
//   });

//   const eventSchema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: true,
//     },
//     date: {
//       type: Date,
//       required: true,
//     },
//     description: {
//       type: String,
//     },
//     createdBy: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       refPath: "creatorModel",
//     },
//     creatorModel: {
//       type: String,
//       required: true,
//       enum: ["Clan", "Club"],
//     },
//   });

//   const clanSchema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: true,
//       enum: CLANS,
//     },
//   });

//   const Clan = mongoose.model("Clan", clanSchema);
//   const Club = mongoose.model("Club", clubSchema);
//   const Event = mongoose.model("Event", eventSchema);

//   module.exports = { Clan, Club, Event };