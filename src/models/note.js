import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      enum: ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'],
      required: true,
      default: 'Todo',
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

export const Note = mongoose.model('Note', noteSchema);
