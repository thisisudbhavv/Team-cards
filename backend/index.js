const express = require("express");
const cors = require("cors");
const { team } = require("./schema");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/team", async (req, res) => {
    const teams = await team.find();
    res.json({
        teams
    })
});

app.post("/add-team", async (req, res) => {
    await team.create({
        name: req.body.name,
        bio: req.body.bio,
        interests: req.body.interests,
        linkedIn: req.body.linkedIn,
        X: req.body.x
    })
    res.json({
        msg: "Card created"
    })
});

app.listen(3000);