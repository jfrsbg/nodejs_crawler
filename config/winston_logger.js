var appRoot = require('app-root-path');
var winston = require('winston');
var moment = require('moment');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: 'error'}),
    new winston.transports.File({
      filename: `${appRoot}/logs/info.log`,
      level: 'info'
    })
  ]
});

function logRequest(req) {
  logger.info({
    requestedUrl: req.originalUrl, //get the requested url
    ipAddress: req.connection.remoteAddress, //get the ip of who requested
    params: req.body, //get the params send via POST
    date: moment().format("YYYY-MM-DD h:m:s")
  })
}


module.exports = {
  logger: logger,
  logRequest: logRequest
};