export const getAllTodos = {
	get: {
		tags: ['TODOS'],
		summary: 'Get all todos.',

		responses: {
			'200': {
				description: 'An object with details of the admin',
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/Success'
						},
						example: {
							success: true,
							message: 'Todos',
							data: {
								todos: [
									{
										_id: '5ed4ae0a03155a6392e1632a',
										title: 'Hello 1'
									},
									{
										_id: '5ed4ae0a03155a6392e1632b',
										title: 'Hello 2'
									},
									{
										_id: '5ed4ae0a03155a6392e1632c',
										title: 'Hello 3'
									}
								]
							}
						}
					}
				}
			},

			'400': {
				description: 'An error object',
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/Error'
						},
						example: {
							success: false,
							message: 'Something bad happened.'
						}
					}
				}
			}
		}
	}
};
