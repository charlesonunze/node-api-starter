import winston, { format, transports } from 'winston';
const { combine, prettyPrint } = format;
import DailyRotateFile from 'winston-daily-rotate-file';

const logDirectory = 'logs';
const logFile = 'app.log';

export const logger = winston.createLogger({
	format: combine(prettyPrint()),
	transports: [
		new DailyRotateFile({
			filename: logFile,
			dirname: logDirectory,
			datePattern: 'DD-MM-YYYY',
			zippedArchive: true,
			maxFiles: '14d',
			maxSize: '20m'
		})
	],
	exceptionHandlers: [
		new transports.Console({
			format: format.simple()
		}),
		new transports.File({ filename: 'exceptions.log', level: 'error' })
	]
});

/**
 * If we're not in production then log to the `console` with the format:
 * `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
 *
 */
if (process.env.NODE_ENV !== 'production') {
	logger.add(
		new winston.transports.Console({
			format: format.simple()
		})
	);
}
