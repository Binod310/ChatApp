const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    roomId: { type: Number, default: 1 },
    messages: []
});

module.exports = mongoose.model("Room", roomSchema);