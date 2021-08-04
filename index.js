const express = require("express");
const app = express();
const bodyparser = require("body-parser");
// const PORT = 3000

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// import router and use
app.use("/api", require("./routers/UserRoter"));

app.get("/", (req, res) => {
  res.json({ status: 200, message: "Working!.." });
});

// // import Database file and Model
const DB = require("./config/DB");

app.listen(8080, () => {
    DB.authenticate()
    DB.sync()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => console.log("Unable to connect to the database:", error));
  console.log(`Server is running use port http://localhost:8080`);
});
