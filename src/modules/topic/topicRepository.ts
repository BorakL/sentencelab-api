import TopicModel from "../../models/topic/topicModel.js";
import type { ITopicDoc } from "../../models/topic/topicTypes.js";
import BaseRepository from "../../repositories/baseRepository.js";

class TopicRepository extends BaseRepository<ITopicDoc>{
    constructor(){
        super(TopicModel)
    }
}

export default TopicRepository;