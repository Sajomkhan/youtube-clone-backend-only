import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";


// IMPORT ROUTE
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("DB is connected");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)

// ERROR HANDELING
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message =err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message
  })
})

app.listen(5010, () => {
  console.log("Server is running at port http://localhost:5010/api/");
  connect();
});
