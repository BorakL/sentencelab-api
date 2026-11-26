import type { NextFunction, Request, Response } from "express";
import SentenceTransformationService from "./sentenceTransformationService.js";
import SentenceTransformationRepository from "./sentenceTransformationRepository.js";

class SentenceTransformationController {
    private service: SentenceTransformationService;
    constructor(service: SentenceTransformationService){
        this.service = service
    }
    async createSentenceTransformation(req:Request, res:Response, next:NextFunction){
        try{
            const sentenceTransformation = await this.service.createSentenceTransformation(req.body)
            res.status(201).json({
                success: true,
                data: sentenceTransformation
            })
        }catch(error){
            next(error)
        }
    }

    async getSentenceTransformationById(req:Request<{id:string}>, res:Response, next:NextFunction){
        try{
            const{id} = req.params;
            const sentenceTransformation = await this.service.getSentenceTransformationById(id);
            res.status(200).json({
                success: true,
                data: sentenceTransformation
            })
        }catch(error){
            next(error)
        }
    }

    async getAllSentenceTransformations(req:Request, res:Response, next:NextFunction){
        try{
            const sentenceTransformations = await this.service.getAllSentenceTransformation(req.query);
            res.status(200).json({
                success: true,
                data: sentenceTransformations
            })
        }catch(error){
            next(error)
        }
    }

    async getPaginatedSentenceTransformations(req:Request, res:Response, next:NextFunction){
        try{
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;
            const sentenceTransformations = await this.service.getPaginateSentenceTransformations({},page,limit)
            res.status(200).json({
                success: true,
                data: sentenceTransformations
            })
        }catch(error){
            next(error)
        }
    }

    async updateSentenceTransformation(req:Request<{id:string}>, res:Response, next:NextFunction){
        try{
            const{id} = req.params;
            const updatedSentenceTransformation = await this.service.updateSentenceTransformation(id,req.body)
            res.status(201).json({
                success: true,
                data: updatedSentenceTransformation
            })
        }catch(error){
            next(error)
        }
    }

    async deleteSentenceTransformation(req:Request<{id:string}>, res:Response, next:NextFunction){
        try{
            const{id} = req.params;
            const deletedSentenceTransformation = await this.service.deleteSentenceTransformation(id)
            res.status(200).json({
                success: true,
                data: deletedSentenceTransformation
            })
        }catch(error){
            next(error)
        }
    }
}

const sentenceTransformationRepository = new SentenceTransformationRepository();
const sentenceTransformationService = new SentenceTransformationService(sentenceTransformationRepository)

export default new SentenceTransformationController(sentenceTransformationService);