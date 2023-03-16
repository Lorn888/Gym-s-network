const express = require("express");
const router = express.Router();
const {
  createGRI,
  getAllGRI,
  getGRI,
} = require("../controllers/gym-rat-controler");

//get all members info
router.get("/", getAllGRI)

//get a single members info
router.get("/:id", getGRI)

//post member info
router.post("/", createGRI);

//delets member info
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delets members info" });
});

//Updates member info
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Updates members info" });
});

module.exports = router;
