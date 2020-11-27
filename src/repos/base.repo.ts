import {
	Model,
	Document,
	UpdateQuery,
	QueryFindOptions,
	QueryFindOneAndUpdateOptions
} from 'mongoose';
import { anyObject } from '../@types';

class BaseRepo {
	protected constructor(private model: Model<Document>) {}

	async save(data: anyObject) {
		return await this.model.create(data);
	}

	async insertMany(data: anyObject[]) {
		return await this.model.insertMany(data);
	}

	async findById(id: string) {
		return await this.model.findById(id).lean().exec();
	}

	async findOne(query: anyObject) {
		return await this.model.findOne(query).lean().exec();
	}

	async find(query: anyObject, options: QueryFindOptions) {
		return await this.model.find(query, null, options).lean().exec();
	}

	async updateOne(findQuery: anyObject, updateQuery: UpdateQuery<anyObject>) {
		return this.model.updateOne(findQuery, updateQuery).exec();
	}

	async updateMany(findQuery: anyObject, updateQuery: UpdateQuery<anyObject>) {
		return this.model.updateMany(findQuery, updateQuery).exec();
	}

	async findOneAndUpdate(
		findQuery: anyObject,
		updateQuery: UpdateQuery<anyObject>,
		options: QueryFindOneAndUpdateOptions
	) {
		return this.model
			.findOneAndUpdate(findQuery, updateQuery, options)
			.lean()
			.exec();
	}

	async deleteOne(query: anyObject) {
		return await this.model.deleteOne(query).exec();
	}

	async deleteMany(query: anyObject) {
		return await this.model.deleteMany(query).exec();
	}

	async findOneAndDelete(query: anyObject) {
		return await this.model.findOneAndDelete(query).exec();
	}

	async aggregate(pipeline: any[]) {
		return this.model.aggregate(pipeline).exec();
	}
}

export default BaseRepo;
