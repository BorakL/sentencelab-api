import type { QueryFilter } from "mongoose";
import type SentenceTransformationRepository from "./sentenceTransformationRepository.js";
import type { ISentenceTransformation, ISentenceTransformationCreateParams, ISentenceTransformationUpdateParams } from "../../models/sentenceTransformation/sentenceTransformationTypes.js";

class SentenceTransformationService {
    private repository: SentenceTransformationRepository;
    constructor(repository: SentenceTransformationRepository){
        this.repository = repository;
    }

    async createSentenceTransformation(data:ISentenceTransformationCreateParams){
        return await this.repository.createOne(data)
    }

    async getSentenceTransformationById(id:string){
        return await this.repository.findById(id);
    }

    async getAllSentenceTransformation(filter:QueryFilter<ISentenceTransformation>){
        return await this.repository.findMany(filter);
    }

    async getPaginateSentenceTransformations(
        filter: QueryFilter<ISentenceTransformation>,
        page = 1,
        limit = 10
    ){
        return await this.repository.findPaginated(filter, {
            page,
            limit
        })
    }

    async updateSentenceTransformation(id:string, data: Partial<ISentenceTransformationUpdateParams>){
        return await this.repository.updateById(id, data)
    }

    async deleteSentenceTransformation(id:string){
        return await this.repository.deleteById(id)
    }
}

export default SentenceTransformationService;