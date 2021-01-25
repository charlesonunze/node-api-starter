import { components } from './components';
import { todoDocs } from './todos';

const swaggerDocs = {
	openapi: '3.0.0',
	info: {
		version: '1.0.0',
		title: 'CBT REST API',
		description: 'Official documentation for CBT REST API.'
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
