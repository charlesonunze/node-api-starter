import { components } from './components';
import { todoDocs } from './todos';

const swaggerDocs = {
	openapi: '3.0.0',
	info: {
		version: '1.0.3',
		title: 'TODO REST API',
		description: 'Official documentation for TODO REST API.'
	},
	schemes: [],
	servers: [
		{
			url: '/api',
			description: 'Development Server'
		}
	],

	paths: {
		'/todos': todoDocs
	},

	components: components
};

export { swaggerDocs };
