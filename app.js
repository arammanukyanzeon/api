import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import subjectRouter from './routes/subject.js';
import topicRouter from './routes/topic.js';
import twitterClientRouter from './routes/twitter_client.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.js';

dotenv.config();
const port = process.env.PORT;

class Server {
    constructor() {
        this.app = express();
        this.config();
    }

    config() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use('/subject', subjectRouter);
        this.app.use('/topic', topicRouter);
        this.app.use('/twitter-client', twitterClientRouter);
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

        this.app.listen(port, () => {
            console.log(`App listening at http://localhost:${port}`)
        });
    }
}

let server = new Server();
export default server.app;
