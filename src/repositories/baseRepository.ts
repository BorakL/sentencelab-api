import { Types, type AnyKeys, type Model, type QueryFilter, type UpdateQuery } from "mongoose";
import { ValidationError } from "../errors/validationError.js";
import { NotFoundError } from "../errors/notFoundError.js";

class BaseRepository<TDoc> {
    protected model: Model<TDoc>

    constructor(model: Model<TDoc>){
        this.model = model;
    }

    private validateId(id: string | Types.ObjectId){
        if(!Types.ObjectId.isValid(id)){
            throw new ValidationError("Invalid MongoDB ObjectId")
        }
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