import { config } from 'dotenv';

config();

let PORT: string;
let DB_URI: string;
let JWT_PRIVATE_KEY: string;

switch (process.env.NODE_ENV) {
	case 'production':
		PORT = process.env.PORT!;
		DB_URI = process.env.DB_URI!;
		JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY!;
		break;

	case 'development':
		PORT = process.env.PORT_DEV!;
		DB_URI = process.env.DB_URI_DEV!;
		JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY_DEV!;
		break;

	case 'test':
		PORT = process.env.PORT_TEST!;
		DB_URI = process.env.DB_URI_TEST!;
		JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY_TEST!;
		break;

	default:
		PORT = process.env.PORT_DEV!;
		DB_URI = process.env.DB_URI_DEV!;
		JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY_DEV!;
		break;
}

export { PORT, DB_URI, JWT_PRIVATE_KEY };
