require("dotenv").config();
import { Server } from './server';

export class BackendApp {
  server?: Server;

  async start() {
    const port = process.env.PORT || '5000';
    this.server = new Server(port);
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  get express() {
    return this.server?.getExpress();
  }

  async stop() {
    return this.server?.stop();
  }

}
