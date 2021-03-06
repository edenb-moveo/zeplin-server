import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes'

class App {
    public app: express.Application;
    public port: number;
    public routes: Routes;
    constructor(port: any) {
        this.app = express(); // this.router = router()?
        this.port = port;
        this.routes = new Routes();
        this.initApp();
        this.initRoutes();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }

    private initRoutes() { 
        this.app.use('/api',this.routes.router);
    }

    private initApp(){

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));	

        this.app.use( (req, res, next) =>{
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader('Access-Control-Allow-Methods','PUT, GET, POST, PATCH, DELETE, OPTIONS');
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            next();
        });
    }



}

export default App;
