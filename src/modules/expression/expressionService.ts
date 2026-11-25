import type { QueryFilter } from "mongoose";
import type { IExpression, IExpressionCreateParams } from "../../models/expression/expressionTypes.js";
import type ExpressionRepository from "./expressionRepository.js";
import type { ICategoryUpdateParams } from "../../models/category/categoryTypes.js";

class ExpressionService {
    private repository: ExpressionRepository;
    constructor(repository: ExpressionRepository){
        this.repository = repository;
    }

    async createExpression(data: IExpressionCreateParams){
        return await this.repository.createOne(data)
    }

    async getExpressionById(id:string){
        return await this.repository.findById(id);
    }

    async getAllExpressions(filter:QueryFilter<IExpression>){
        return await this.repository.findMany(filter);
    }

    async getPaginateExpressions(
        filter: QueryFilter<IExpression>,
        page = 1,
        limit = 10
    ){
        return await this.repository.findPaginated(filter, {
            page,
            limit
        })
    }

    async updateExpression(id:string, data: Partial<ICategoryUpdateParams>){
        return await this.repository.updateById(id, data)
    }

    async deleteExpression(id:string){
        return await this.repository.deleteById(id)
    }
}

export default ExpressionService;