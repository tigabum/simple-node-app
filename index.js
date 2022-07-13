const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    // console.log(__dirname, /Content/index.html)
   res.sendFile(__dirname + '/Content/index.html')
//   res.send("Hello world");
//   res.end();
});

app.get("/about", (req ,res) => {
    res.sendFile(__dirname + '/Content/about.html')
})

app.get("/contact", (req, res) => {
    res.sendFile(__dirname+ '/Content/contact.html')
})

app.get("*", (req, res) => {
    res.sendFile(__dirname+'/Content/404.html')
})
const port = 3002;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
