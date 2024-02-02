var env = function(conf) {
  conf.kafkaUrls = ['localhost:9092'];
  conf.db.connection.url = `mongodb://admin:traM8qzM8RwXrCfL@103.226.250.241:27017/tradex-market`;
  conf.redis.host = '172.31.245.221';
  conf.redis.options.password = null;
  return conf;
};
module.exports = env;
