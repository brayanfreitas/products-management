import fastify, { FastifyInstance } from "fastify";
import { applicationConfig } from "./main/config";

export default class App { 
    public app: FastifyInstance;
    public port: number;
    public host: string; 

    constructor(appInit: { plugins: any; routes: any }) {
        this.app = fastify({ logger: true });
        this.port = applicationConfig.port;
        this.host = applicationConfig.host;
    }

    public listen(): void {
        this.app.listen({ port: this.port }, (err, address) => {
            if (err) {
                this.app.log.fatal({ msg: `Application startup error`, err })
                process.exit(1)
            }
            console.log(`App listening on the ${address} 🚀`)
        })
    }
}