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
    // Kafka.create(conf, conf.kafkaConsumerOptions, true,
    //     conf.kafkaTopicOptions, conf.kafkaProducerOptions, () => {
    //         Logger.info(`finish init kafka`);
    //         console.log('finish init kafka')
    //     });
    // TradexNotification.create(Kafka.getInstance());
    await connectSocket();
}

init()
    .then()
    .catch((error: Error): void => {
        Logger.error(error);
        process.exit(1);
    });