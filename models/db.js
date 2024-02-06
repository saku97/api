const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/krustykrab";

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
