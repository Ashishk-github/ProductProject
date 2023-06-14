/**
 * module for creating mongodb connection
 */

 import mongoose from 'mongoose';

 export default class Mongo {
   /**
    * creates connection with mongodb
    */
   constructor() {
     const proto = Object.getPrototypeOf(this);
     if (!proto.connection) {
        proto.connection = mongoose.connect(process.variables.app.db_url,{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: { version: '1' } });
     }
   }
 }
