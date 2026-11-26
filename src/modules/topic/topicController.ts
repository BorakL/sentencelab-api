import type { NextFunction, Request, Response } from "express";
import TopicService from "./topicService.js";
import TopicRepository from "./topicRepository.js";


class TopicController {
    private service: TopicService;
    constructor(service: TopicService){
        this.service = service;
    }

    async createTopic(req:Request, res:Response, next: NextFunction){
        try{
            const topic = await this.service.createTopic(req.body);
            res.status(201).json({
                success: true,
                data: topic
            })            
        }catch(error){
            next(error)
        }
    }

    async getTopicById(req:Request<{id:string}>, res:Response, next: NextFunction){
        try{
            const {id} = req.params;
            const topic = await this.service.getTopicById(id);
            res.status(200).json({
                success: true,
                data: topic
            })
        }catch(error){
            next(error)
        }
    }

    async getAllTopics(req:Request, res:Response, next:NextFunction){
        try{
            const topics = await this.service.getAllTopics(req.query);
            res.status(200).json({
                success: true,
                data: topics
            })
        }catch(error){
            next(error)
        }
    }

    async getPaginatedTopics(req:Request, res:Response, next:NextFunction){
        try{
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;
            const topics = await this.service.getPaginateTopics({},page,limit)
            res.status(200).json({
                success: true,
                data: topics
            })
        }catch(error){
            next(error)
        }
    }

    async updateTopic(req:Request<{id:string}>, res:Response, next:NextFunction){
        try{
            const{id} = req.params;
            const topic = await this.service.updateTopic(id,req.body)
            res.status(201).json({
                success: true,
                data: topic
            })
        }catch(error){
            next(error)
        }
    }

    async deleteTopic(req:Request<{id:string}>, res:Response, next: NextFunction){
        try{
            const{id} = req.params;
            const deletetTopic = await this.service.deleteTopic(id);
            res.status(200).json({
                success: true,
                data: deletetTopic
            })
        }catch(error){
            next(error)
        }
    }
}

const topicRepository = new TopicRepository();
const topicService = new TopicService(topicRepository);

export default new TopicController(topicService)