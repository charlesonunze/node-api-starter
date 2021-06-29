import {
	Model,
	Document,
	UpdateQuery,
	QueryFindOptions,
	QueryFindOneAndUpdateOptions,
	CreateQuery,
	FilterQuery
} from 'mongoose';

class BaseRepo<T extends Document> {
	protected constructor(private model: Model<T>) {}

	async insertOne(data: CreateQuery<T>) {
		return await this.model.create(data);
	}

	async insertMany(data: T[]) {
		return await this.model.insertMany(data);
	}

	async findById(id: string) {
		return await this.model.findById(id).lean().exec();
	}

	async findOne(query: FilterQuery<T>) {
		return await this.model.findOne(query).lean().exec();
	}

	async find(query: FilterQuery<T>, options: QueryFindOptions) {
		return await this.model.find(query, null, options).lean().exec();
	}

	async updateOne(findQuery: FilterQuery<T>, updateQuery: UpdateQuery<T>) {
		return this.model.updateOne(findQuery, updateQuery).exec();
	}

	async updateMany(findQuery: FilterQuery<T>, updateQuery: UpdateQuery<T>) {
		return this.model.updateMany(findQuery, updateQuery).exec();
	}

	async findOneAndUpdate(
		findQuery: FilterQuery<T>,
		updateQuery: UpdateQuery<T>,
		options: QueryFindOneAndUpdateOptions
	) {
		return this.model
			.findOneAndUpdate(findQuery, updateQuery, options)
			.lean()
			.exec();
	}

	async deleteOne(query: FilterQuery<T>) {
		return await this.model.deleteOne(query).exec();
	}

	async deleteMany(query: FilterQuery<T>) {
		return await this.model.deleteMany(query).exec();
	}

	async findOneAndDelete(query: FilterQuery<T>) {
		return await this.model.findOneAndDelete(query).exec();
	}

	async aggregate(pipeline: any[]) {
		return this.model.aggregate(pipeline).exec();
	}
}

export default BaseRepo;
