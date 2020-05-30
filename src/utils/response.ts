import { ResponseParams } from '../@types';

export const sendResponse = ({
	res,
	data,
	message,
	statusCode = 200
}: ResponseParams) => {
	res.status(statusCode).json({
		success: statusCode < 400,
		message,
		data
	});
};
