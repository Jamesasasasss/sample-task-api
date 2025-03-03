import express from 'express';
import routes from './routes';
import config from './config/config';

const app = express();

app.use(express.json());

app.use('/api', routes);

app.listen(config.app.port, () => {
  console.log(`Server is running on port ${config.app.port}`);
});
