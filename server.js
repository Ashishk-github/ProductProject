import Config from './config/config';
import Boostrap from './bootstrap/Bootstrap';

// loads config and env variables in process
Config();
import {app} from './app';



// initalizing global required services and creating server
Promise.all(Boostrap.intializeServices())
  .then(() => {
    let ports = [process.env.PORT]
    ports.forEach(port => {
      app.listen(port, () => {
        console.log('Server Started Successfully' + port);
      });
    });
  })
  .catch((error) => {
    Logger.error('BoostrapInitiailizeServices', new Error(error));
  });
