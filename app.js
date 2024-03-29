const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("./db");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
