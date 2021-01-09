import express from 'express';
import bodyParser from 'body-parser';
//import router from './routes/routes.js'

const port = 8080;

class Server {

    static server() {
        return new Server();
    }

    constructor() {
        this.app = express();
        this.config();
    }

    config() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        //this.app.use(router)
        this.app.listen(port, () => {
            console.log(`App listening at http://localhost:${port}`)
        })
        this.app.get('/get', async (req, res) => {
            try {
                console.log("ALO")

                if (post) {
                    res.status(200).json(post)
                } else {
                    res.status(404).json({ message: "Post not found" })
                }
            } catch (err) {
                res.status(500).json({ message: "Error getting posts", error: err })
            }
        })
    }
}

let server = Server.server()
export default server.app;