import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import connectDb from "./db/connect.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from Server!");
});

const startServer = async () => {
  try {
    connectDb(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Server has started on port http://localhost:8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
