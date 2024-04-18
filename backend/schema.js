const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pateludbhav2001:ff2xytPYTpdM55ru@cluster0.kvqmpws.mongodb.net/teams-data");

const teams = new mongoose.Schema({
    name: String,
    bio: String,
    interests: [String],
    linkedIn: String,
    X: String
});

const team = mongoose.model('teams', teams);

module.exports = {
    team
}