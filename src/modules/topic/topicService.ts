import type { QueryFilter } from "mongoose";
import type { ITopic, ITopicCreateParams, ITopicUpdateParams } from "../../models/topic/topicTypes.js";
import type TopicRepository from "./topicRepository.js";

class TopicService {
    private repository:TopicRepository;
    constructor(repository:TopicRepository){
        this.repository = repository
    }

    async createTopic(data:ITopicCreateParams){
        return await this.repository.createOne(data)
    }

    async getTopicById(id:string){
        return await this.repository.findById(id)
    }

    async getAllTopics(filter:QueryFilter<ITopic>){
        return await this.repository.findMany(filter)
    }

    async getPaginateTopics(
        filter: QueryFilter<ITopic>,
        page = 1,
        limit = 10
    ){
        return await this.repository.findPaginated(filter, {
            page,
            limit
        })
    }

    async updateTopic(id:string, data: Partial<ITopicUpdateParams>){
        return await this.repository.updateById(id, data)
    }

    async deleteTopic(id:string){
        return await this.repository.deleteById(id)
    }
}

export default TopicService