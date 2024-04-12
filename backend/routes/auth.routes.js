import express from "express";

const router = express.Router();

router.get("/auth/login", (req, res) => {
  res.send("signup");
});
router.get("/auth/signup", (req, res) => {
  res.send("login");
});
router.get("/auth/logout", (req, res) => {
  res.send("logout");
});

export default router;
