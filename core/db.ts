import mongoose from 'mongoose';

mongoose.Promise = Promise;

const URI = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/twitter';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as any);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

export { db, mongoose };
