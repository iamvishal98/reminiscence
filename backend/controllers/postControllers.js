import asynchandler from "express-async-handler";
import Post from "../models/postModel.js";

export const getPosts = asynchandler(async (req, res) => {
  const posts = await Post.find();
  if (posts) {
    res.status(200).json(posts);
  } else {
    res.status(404);
    throw new Error("posts not found");
  }
});

export const createPosts = asynchandler(async (req, res) => {
  //res.json(req.body);
  const post = req.body;
  const newPost = new Post(post);
  if (newPost) {
    await newPost.save();
    res.status(201).json(newPost);
    console.log(req.file);
  } else {
    res.status(409);
    throw new Error("cannot create post");
  }
});
