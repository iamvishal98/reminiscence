import asynchandler from "express-async-handler";

export const getposts = asynchandler(async (req, res) => {
  res.send("this works");
});
