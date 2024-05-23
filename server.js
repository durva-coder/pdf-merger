const express = require("express");
const path = require("path");
const multer = require("multer");
const { mergePdfs } = require("./merge");

const app = express();
const upload = multer({ dest: "uploads/" });
const port = 10000;

app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.post("/merge", upload.array("pdfs", 2), async (req, res) => {
  console.log(req.files);
  await mergePdfs(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );

  res.redirect("/static/merged.pdf");
  //   res.send({ data: req.files });

  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
