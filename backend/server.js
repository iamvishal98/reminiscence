import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/dbConfig.js";
import postRoutes from "./routes/postRoute.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();

dotenv.config();
connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/posts", postRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, (req, res) => {
  console.log(`server listening on ${process.env.PORT}`);
});
