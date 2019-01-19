import mongoose from 'mongoose';
import constants from './constants';

export const database = {

// Remove the warning with promise

  setupConnection () {
    try {
      mongoose.Promise =  global.Promise;
      mongoose.connect(constants.mongodbURL, {useNewUrlParser: true});

      mongoose.connection
      .once('open' , () => console.log('mongodb running'))
      .on('error', e => {
        throw e;
      });
    } catch (error) {
      console.log(error);
    }
  }

};
