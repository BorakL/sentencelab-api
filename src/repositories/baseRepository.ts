import { Types, type AnyKeys, type Model, type QueryFilter, type UpdateQuery } from "mongoose";
import { ValidationError } from "../errors/validationError.js";
import { NotFoundError } from "../errors/notFoundError.js";

class BaseRepository<TDoc> {
    protected model: Model<TDoc>

    constructor(model: Model<TDoc>){
        this.model = model;
    }

    // Validates whether the provided ID is a valid MongoDB ObjectId.
    private validateId(id: string | Types.ObjectId){
        if(!Types.ObjectId.isValid(id)){
            throw new ValidationError("Invalid MongoDB ObjectId")
        }
    }

    // Checks whether at least one document matching the filter exists.
    async exists(filter: QueryFilter<TDoc>): Promise<boolean> {
        const document = await this.model.exists(filter);
        return document !== null;
    }

    // Returns the number of documents matching the filter.
    async count(filter: QueryFilter<TDoc> = {}): Promise<number> {
        return this.model.countDocuments(filter);
    }

    // Finds a document by its ID.
    // Returns null if no matching document is found.
    async findByIdOrNull(id: string | Types.ObjectId): Promise<TDoc | null> {
        this.validateId(id);
        return this.model.findById(id);
    }

    async createOne<T>(data:T): Promise<TDoc> {
        const document = await this.model.create(data as AnyKeys<TDoc>);
        if(!document){
            throw new Error("Failed to create document");
        }
        return document
    }

    async findById(id:string | Types.ObjectId): Promise<TDoc>{
        this.validateId(id);
        const document = await this.model.findById(id);
        if(!document){
            throw new NotFoundError("Document not found");
        }
        return document;
    }

    async findOne<T>(filter: QueryFilter<T> = {}): Promise<TDoc> {
        const document = await this.model.findOne(filter);
        if(!document){
            throw new NotFoundError("Document not found")
        }
        return document;
    }

    async findMany<T>(filter: QueryFilter<T> = {}): Promise<TDoc[]>{
        return await this.model.find(filter)
    }

    async findPaginated<T>(
        filter: QueryFilter<T> = {},
        options: {
            page?: number;
            limit?: number;
            sortBy?: string;
            sortOrder?: "asc" | "desc";
        } = {}
    ){
        const {
            page = 1,
            limit = 10,
            sortBy = "createdAt",
            sortOrder = "desc"
        } = options

        const skip = (page - 1) * limit; 

        const [document, total] = await Promise.all([
            this.model
                .find(filter)
                .sort({ [sortBy]: sortOrder === "asc" ? 1 : -1})
                .skip(skip)
                .limit(limit),
            
            this.model.countDocuments(filter)
        ])

        return {
            document,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total/limit)
            }
        }
    }

    async updateById(
        id: string | Types.ObjectId,
        data: UpdateQuery<TDoc>
    ): Promise<TDoc>{
        this.validateId(id);
        const updatedDoc = await this.model.findByIdAndUpdate(
            id,
            data,
            {
                new: true,
                runValidators: true
            }
        )
        if(!updatedDoc){
            throw new NotFoundError("Document to update was not found");
        }
        return updatedDoc;
    }

    async deleteById(id: string | Types.ObjectId): Promise<TDoc>{
        this.validateId(id);
        const document = await this.model.findByIdAndDelete(id);
        if(!document){
            throw new NotFoundError("Document to delete was not found")
        }
        return document;
    }

}

export default BaseRepository;