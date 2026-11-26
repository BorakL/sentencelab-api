import type { QueryFilter } from "mongoose";
import type { ISentence, ISentenceCreateParams, ISentenceUpdateParams } from "../../models/sentence/sentenceTypes.js";
import type SentenceRepository from "./sentenceRepository.js";
import type { IExpression } from "../../models/expression/expressionTypes.js";

class SentenceService{
    private repository: SentenceRepository;
    constructor(repository: SentenceRepository){
        this.repository = repository;
    }

    async createSentence(data: ISentenceCreateParams){
        return await this.repository.createOne(data)
    }

    async getSentenceById(id:string){
        return await this.repository.findById(id);
    }

    async getAllSentences(filter:QueryFilter<ISentence>){
        return await this.repository.findMany(filter);
    }

    async getPaginateSentences(
        filter: QueryFilter<IExpression>,
        page = 1,
        limit = 10
    ){
        return await this.repository.findPaginated(filter, {
            page,
            limit
        })
    }

    async updateSentence(id:string, data: Partial<ISentenceUpdateParams>){
        return await this.repository.updateById(id, data)
    }

    async deleteSentence(id:string){
        return await this.repository.deleteById(id)
    }
}

export default SentenceService