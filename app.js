import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import Routes from './routes/index';
import { errorHandler } from './app/Middlewares/errorHandler';


const app = express();

// parse json request body 
app.use(express.json({ limit: "500mb" }));

// parse urlencoded request body
app.use(express.urlencoded({ limit: "500mb", extended: true }));

// security middleware
app.use(helmet());

app.use('/api', [cors()], Routes);

app.use(errorHandler())


export {app}