const mongoose = require("mongoose")

const BookingSchema = new mongoose.Schema({

  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service"
  },

  status: {
    type: String,
    default: "pending"
  }

})

module.exports = mongoose.model("Booking", BookingSchema)