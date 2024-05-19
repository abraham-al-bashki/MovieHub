import { connect } from 'mongoose';

const connectionMongoDB = async () => {
  try {
    await connect('mongodb://127.0.0.1:27017/moviehub');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectionMongoDB;
