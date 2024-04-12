import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api/auth", authRoutes);

app.listen(5001, () => console.log(`Server has started at Port ${PORT}`));
