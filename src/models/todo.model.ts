import { Document, Schema, model } from 'mongoose';

interface ITodo extends Document {
	title: string;
	completed: boolean;
	createdAt?: Date;
}

interface ITodoObject {
	title: string;
	completed: boolean;
	createdAt?: Date;
}

const TodoSchema = new Schema(
	{
		title: { type: String, trim: true },
		completed: { type: Boolean, default: false }
	},
	{ timestamps: true }
);

TodoSchema.index({ title: 1 });

const TodoModel = model<ITodo>('Todo', TodoSchema);

export { TodoModel, ITodo, ITodoObject };
