import { join } from 'path';
import winston, { format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const { combine, prettyPrint } = format;

export const logger = winston.createLogger({
	level: 'error',
	format: combine(prettyPrint()),
	transports: [
		new DailyRotateFile({
			filename: join(__dirname, '..logs/error.log'),
			dirname: 'logs',
			datePattern: 'DD-MM-YYYY',
			zippedArchive: true,
			maxFiles: '14d',
			maxSize: '20m',
			level: 'error'
		})
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
			format: format.simple(),
			level: 'info'
		})
	);
}
