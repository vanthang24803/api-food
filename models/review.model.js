import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ReviewSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    title: String,
    start: Number,
  },
  {
    timestamps: true,
  }
);

const Review = model("Review", ReviewSchema);

export default Review;
