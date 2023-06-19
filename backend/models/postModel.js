import mongoose from "mongoose";
const { Schema, model } = mongoose;
const PostSchema = new Schema(
  {
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", PostSchema);
export default Post;
