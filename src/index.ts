const WebSocket = require('ws');

import {
    Kafka,
    Logger,
    TradexNotification,
} from 'tradex-common';
import conf from "./conf";
import {connectSocket} from "./socket/SocketClient";


// Logger.create(conf.logger.config, true);
Logger.info('Staring...');

async function init() {

    const wss = new WebSocket.Server({port: 8081});
    wss.on('connection', function connection(ws: any) {
        ws.on('message', function incoming(message: any) {
            console.log('received: %s', message);
        });
        setInterval(() => {
            ws.send('gui tu server');
        }, 1000);

    });
    wss.on('error', console.error);
}

init()
    .then()
    .catch((error: Error): void => {
        Logger.error(error);
        process.exit(1);
    });