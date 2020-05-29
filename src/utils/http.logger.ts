import { Application } from 'express';
import morgan from 'morgan';
import { createStream } from 'rotating-file-stream';

const logDirectory = 'logs';
const requestLogFile = 'requests.log';
const requestLogRollingInterval = '1d';
const requestLogFormat =
	'[:date[iso]] :method :url :status :response-time ms - :res[content-length]';

// rotating stream for morgan
const accessLogStream = createStream(requestLogFile, {
	interval: requestLogRollingInterval,
	path: logDirectory
});

// appenders for printing the logs to console and file
const consoleAppender = morgan(requestLogFormat);
const fileAppender = morgan(requestLogFormat, {
	stream: accessLogStream
});

// function to inject morgan in an express app
export const registerRequestLogger = (app: Application) => {
	// log to file only in `production`
	if (process.env.NODE_ENV === 'production') {
		app.use(fileAppender);
	} else {
		app.use(consoleAppender);
	}
};
