import SentenceModel from "../../models/sentence/sentenceModel.js";
import type { ISentenceDoc } from "../../models/sentence/sentenceTypes.js";
import BaseRepository from "../../repositories/baseRepository.js";

class SentenceRepository extends BaseRepository<ISentenceDoc>{
    constructor(){
        super(SentenceModel)
    }
}

export default SentenceRepository;