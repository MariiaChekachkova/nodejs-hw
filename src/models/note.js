import mongoose from 'mongoose';

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
      enum: [
        'Todo',
        'Work',
        'Personal',
        'Meeting',
        'Shopping',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
      ],

      default: 'Todo',
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

export const Note = mongoose.model('Note', noteSchema);
