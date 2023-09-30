const express = require("express");
const cors = require("cors");

const routes = require('./routes/routes')

const db = require("./database/db");

const app = express();

db.connect();

const allowedOrigins = ["http://localhost:3000", "http://www.app.com.br"];

app.use(
  cors({
    origin: function (origin, callback) {
      let allowed = true;

      if (!origin || origin === null) allowed = true;

      if (!allowedOrigins.includes(origin)) allowed = false;

      callback(null, allowed);
    },
  })
);

app.use(express.json());

app.use("/api", routes);

app.use('/api', (req, res)=>{
    res.send('<h1>API is running</h1>')
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
