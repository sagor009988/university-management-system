import app from './app';
import mongoose from 'mongoose';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.dataBase_url as string);
    app.listen(config.port, () => {
      console.log(`Example a listening port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
