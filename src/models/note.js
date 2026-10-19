import mongoose from 'mongoose';
import { TAGS } from '../constants/tags.js';

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, // Automatically trims whitespace from the beginning and end of the string
    },
    content: {
      type: String,
      default: '',
      trim: true, // Automatically trims whitespace from the beginning and end of the string
    },
    tag: {
      type: String,
      enum: TAGS, // Restrict the tag to be one of the predefined tags
      default: 'Todo',
      index: true, // Create an index on the tag field for faster queries
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);
noteSchema.index({ tag: 1, userId: 1 }); // Create a text index on title and content for full-text search
export const Note = mongoose.model('Note', noteSchema);
