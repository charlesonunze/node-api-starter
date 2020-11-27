import { expect } from 'chai';
import { handleValidationError, validateTodoInput } from '../../src/validators';

describe('VALIDATOR FUNCTIONS', () => {
	afterEach((done) => {
		done();
	});

	describe('validateTodoInput', () => {
		it('should validate user input', () => {
			const invalidData = {};
			const validData = { title: 'I am valid data' };

			const failed = validateTodoInput(invalidData);
			const passed = validateTodoInput(validData);

			expect(passed.error).to.equal(undefined);
			expect(failed.error!.message).to.equal(`"title" is required`);
		});
	});

	describe('handleValidationError', () => {
		it('should handle validation errors', () => {
			const invalidData = {};

			const { error } = validateTodoInput(invalidData);

			expect(() => handleValidationError(error!)).to.throw();
		});
	});
});
