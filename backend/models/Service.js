const mongoose = require("mongoose")

const ServiceSchema = new mongoose.Schema({

  serviceName: String,

  description: String,

  price: Number,

  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

})

module.exports = mongoose.model("Service", ServiceSchema)