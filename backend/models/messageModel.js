import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
  {
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    learner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    savedPost: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Post',
        },
      },
    ],
    isAgreed: {
      type: Boolean,
      required: true,
      default: false,
    },
    AgreedAt: {
      type: Date,
    },
    isArchived: {
      type: Boolean,
      required: true,
      default: false,
    },
    ArchivedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
