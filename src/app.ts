import express from "express";
import http from "http";
import cors from "cors";

import connectDB from "./configs/db";
import routes from "./routes";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// creating a server
const port = process.env.PORT || 8000;
const server = http.createServer(app);

connectDB()
  .then(() => {
    server.listen(port, () => {
      console.log(`The server is running at http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.log("Error Failed", error);
  });

export default app;
