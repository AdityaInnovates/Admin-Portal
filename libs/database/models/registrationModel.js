const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  registrationDetails: {
    type: Array,
    required: true,
  },
});

module.exports =
  mongoose.models.RegistrationData ||
  mongoose.model("RegistrationData", eventSchema);

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
