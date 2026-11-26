import type { NextFunction, Request, Response } from "express";
import SentenceService from "./sentenceService.js";
import SentenceRepository from "./sentenceRepository.js";

class SentenceController {
    private service: SentenceService;
    constructor(service: SentenceService){
        this.service = service;
    }

    async createSentence(req:Request, res:Response, next: NextFunction){
        try{
            const sentence = await this.service.createSentence(req.body);
            res.status(201).json({
                success: true,
                data: sentence
            })            
        }catch(error){
            next(error)
        }
    }

    async getSentenceById(req:Request<{id:string}>, res:Response, next: NextFunction){
        try{
            const {id} = req.params;
            const sentence = await this.service.getSentenceById(id);
            res.status(200).json({
                success: true,
                data: sentence
            })
        }catch(error){
            next(error)
        }
    }

    async getAllSentences(req:Request, res:Response, next:NextFunction){
        try{
            const sentences = await this.service.getAllSentences(req.query);
            res.status(200).json({
                success: true,
                data: sentences
            })
        }catch(error){
            next(error)
        }
    }

    async getPaginatedSentences(req:Request, res:Response, next:NextFunction){
        try{
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;
            const sentences = await this.service.getPaginateSentences({},page,limit)
            res.status(200).json({
                success: true,
                data: sentences
            })
        }catch(error){
            next(error)
        }
    }

    async updateSentence(req:Request<{id:string}>, res:Response, next:NextFunction){
        try{
            const{id} = req.params;
            const sentence = await this.service.updateSentence(id,req.body)
            res.status(201).json({
                success: true,
                data: sentence
            })
        }catch(error){
            next(error)
        }
    }

    async deleteSentence(req:Request<{id:string}>, res:Response, next: NextFunction){
        try{
            const{id} = req.params;
            const deletetSentence = await this.service.deleteSentence(id);
            res.status(200).json({
                success: true,
                data: deletetSentence
            })
        }catch(error){
            next(error)
        }
    }
}

const sentenceRepository = new SentenceRepository();
const sentenceService = new SentenceService(sentenceRepository);

export default new SentenceController(sentenceService)