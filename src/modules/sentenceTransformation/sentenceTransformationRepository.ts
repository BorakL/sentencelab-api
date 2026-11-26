import SentenceTransformationModel from "../../models/sentenceTransformation/sentenceTransformation.js";
import type { ISentenceTransformationDoc } from "../../models/sentenceTransformation/sentenceTransformationTypes.js";
import BaseRepository from "../../repositories/baseRepository.js";

class SentenceTransformationRepository extends BaseRepository<ISentenceTransformationDoc>{
    constructor(){
        super(SentenceTransformationModel)
    }
}

export default SentenceTransformationRepository;