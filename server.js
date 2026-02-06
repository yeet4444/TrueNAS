
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadFolder),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });


app.get("/files", (req, res) => {
  const files = fs.readdirSync(uploadFolder);
  res.json(files);
});

app.get("/download/:name", (req, res) => {
  res
