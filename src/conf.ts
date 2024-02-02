import * as fs from "fs";
import {Logger, Utils} from "tradex-common";


const nodeId = Utils.getMsTime();

let conf: any = {
  clusterId: "lotte-bridge-notification",
  clientId: `lotte-bridge-notification-${nodeId}`,
  kafkaUrls: ['localhost:9092'],
  kafkaCommonOptions: {},
  kafkaConsumerOptions: {},
  kafkaProducerOptions: {},
  kafkaTopicOptions: {},
  retryTimes: 3,
  defaultAvatar: "https://s3-ap-southeast-1.amazonaws.com/tradex-vn/avatar/default.png",
  defaultKafkaTimeout: 10000,
  logger: {
    config: {
      appenders: {
        application: {type: 'console'},
        file: {type: 'file', filename: '/logs/application.log', compression: true, maxLogSize: 10485760, backups: 10},
      },
      categories: {
        default: {appenders: ['application', 'file'], level: 'info'},
      },
    },
  },
  log: {
    serviceName: "collector-bridge",
    format: "FLAT", // 'FLAT' or 'JSON'
    transport: [],
  },
  lotte: {
    websocketAddress: 'ws://172.33.30.23:9000',
  },
};


try {
  const configFileStr = fs.readFileSync("env.js", "utf8");
  const vm = require("node:vm");
  const script = new vm.Script(configFileStr);
  script.runInNewContext({
    conf: conf,
    config: conf,
    process,
  });
} catch (e) {
  console.error("fail to load external configuration", e);
  Logger.error("fail to load external configuration", e);
}

Logger.info('configuration after injecting:', conf);

conf.kafkaConsumerOptions = {
  ...(conf.kafkaCommonOptions ? conf.kafkaCommonOptions : {}),
  ...(conf.kafkaConsumerOptions ? conf.kafkaConsumerOptions : {}),
};
conf.kafkaProducerOptions = {
  ...(conf.kafkaCommonOptions ? conf.kafkaCommonOptions : {}),
  ...(conf.kafkaProducerOptions ? conf.kafkaProducerOptions : {}),
};

export default conf;
