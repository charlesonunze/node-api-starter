import { Schema, model } from 'mongoose';

const TodoSchema = new Schema({
	title: { type: String, trim: true },
	completed: { type: Boolean, default: false },
	created: { type: Date, default: Date.now }
});

TodoSchema.index({ title: 1 });

export const TodoModel = model('Todo', TodoSchema);
