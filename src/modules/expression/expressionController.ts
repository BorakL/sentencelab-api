import type { NextFunction, Request, Response } from "express";
import ExpressionService from "./expressionService.js";
import ExpressionRepository from "./expressionRepository.js";

class ExpressionController{
    private service: ExpressionService;
    constructor(service: ExpressionService){
        this.service = service;
    }

    async createExpression(req:Request, res:Response, next:NextFunction){
        try{
            const expression = await this.service.createExpression(req.body);
            res.status(201).json({
                success: true,
                data: expression
            })
        }catch(error){
            next(error)
        }
    }

    async getExpressionById(req:Request<{id:string}>, res:Response, next:NextFunction){
        try{
            const {id} = req.params
            const expression = await this.service.getExpressionById(id)
            res.status(200).json({
                success: true,
                data: expression
            })
        }catch(error){
            next(error)
        }
    }

    async getAllExpressions(req:Request, res:Response, next: NextFunction){
        try{
            const expressions = await this.service.getAllExpressions(req.query);
            res.status(200).json({
                success: true,
                data: expressions
            })
        }catch(error){
            next(error)
        }
    }

    async getPaginatedExpressions(req:Request, res:Response, next:NextFunction){
        try{
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;
            const expressions = await this.service.getPaginateExpressions({},page,limit);
            res.status(200).json({
                success: true,
                data: expressions
            })
        }catch(error){
            next(error)
        }
    }

    async updateExpression(req:Request<{id:string}>, res:Response, next:NextFunction){
        try{
            const{id} = req.params;
            const expression = await this.service.updateExpression(id, req.body);
            res.status(201).json({
                success: true,
                data: expression
            })
        }catch(error){
            next(error)
        }
    }

    async deleteExpression(req:Request<{id:string}>, res:Response, next:NextFunction){
        try{
            const{id} = req.params;
            const deletedExpression = await this.service.deleteExpression(id);
            res.status(200).json({
                success: true,
                data: deletedExpression
            })
        }catch(error){
            next(error)
        }
    }
}


const expressionRepository = new ExpressionRepository();
const expressionService = new ExpressionService(expressionRepository)

export default new ExpressionController(expressionService);