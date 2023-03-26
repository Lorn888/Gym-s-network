const express = require("express");
const router = express.Router();
const {
  createGRI,
  getAllGRI,
  getGRI,
  deleteGRI,
  updateGRI,
} = require("../controllers/gym-rat-controler");

//get all members info
router.get("/", getAllGRI);

//get a single members info
router.get("/:id", getGRI);

//post member info
router.post("/", createGRI);

//delets member info
router.delete("/:id", deleteGRI);

//Updates member info
router.patch("/:id", updateGRI);

module.exports = router;
