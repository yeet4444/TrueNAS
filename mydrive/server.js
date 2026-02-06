const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();

// Folder for uploaded files
const uploadFolder = path.join(__dirname, "files");
if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder, { recursive: true });

// ✅ Serve static files (index.html + styles.css) from /public
app.use(express.static(path.join(__dirname, "public")));

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadFolder),
  filename: (req, file, cb) => cb(null, Date.now() + "--" + file.originalname),
});
const upload = multer({ storage });

// Upload endpoint
app.post("/upload", upload.single("file"), (req, res) => {
  res.redirect("/");
});

// List files endpoint
app.get("/files", (req, res) => {
  const files = fs.readdirSync(uploadFolder);
  res.json(files);
});

// Download endpoint
app.get("/download/:name", (req, res) => {
  const filePath = path.join(uploadFolder, req.params.name);

  // Basic safety check
  if (!filePath.startsWith(uploadFolder)) return res.status(400).send("Bad request");
  if (!fs.existsSync(filePath)) return res.status(404).send("Not found");

  res.download(filePath);
});

// Delete endpoint
app.delete("/delete/:name", (req, res) => {
  const filePath = path.join(uploadFolder, req.params.name);

  // Safety checks
  if (!filePath.startsWith(uploadFolder)) return res.status(400).send("Bad request");
  if (!fs.existsSync(filePath)) return res.status(404).send("Not found");

  fs.unlink(filePath, (err) => {
    if (err) return res.status(500).send("Could not delete");
    res.json({ ok: true });
  });
});



// Start server
app.listen(3000, "0.0.0.0", () => {
  console.log("Drive kjører på port 3000");
});
