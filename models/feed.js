import { Schema, model, models } from 'mongoose';

const FeedSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  feed: {
    type: String,
    required: [true, 'Feed is required'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required'],
  },
});

const Feed = models.Feed || model('Feed', FeedSchema);

export default Feed;