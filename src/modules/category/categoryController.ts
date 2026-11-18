import type { NextFunction, Request, Response } from "express";
import type CategoryService from "./categoryService.js";

class CategoryController {
    private service: CategoryService;
    constructor(service: CategoryService){
        this.service = service;
    }

    async createCategory(req:Request, res: Response, next: NextFunction) {
        try{
            const category = await this.service.createCategory(req.body);
            res.status(201).json({
                success: true,
                data: category
            })
        }catch(error){
            next(error)
        }
    }

    async getCategoryById(req:Request<{id:string}>, res:Response, next:NextFunction){
        try{
            const category = await this.service.getCategoryById(req.params.id);
            res.status(200).json({
                success: true,
                data: category
            })
        }catch(error){
            next(error);
        }
    }

    async getAllCategories(req:Request, res:Response, next:NextFunction){
        try{
            const categories = await this.service.getAllCategories(req.query);
            res.status(200).json({
                success: true,
                data: categories
            })
        }catch(error){
            next(error);
        }
    }

    async getPaginatedCategories(req:Request, res:Response, next:NextFunction){
        try{
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;
            const categories = await this.service.getPaginatedCategories({},page,limit);
            res.status(200).json({
                success: true,
                data: categories
            })
        }catch(error){
            next(error);
        }
    }

    async updateCategory(req:Request<{id:string}>, res:Response, next:NextFunction){
        try{
            const updatedCategory = await this.service.updateCategory(req.params.id, req.body);
            res.status(201).json({
                success: true,
                data: updatedCategory
            })
        }catch(error){
            next(error)
        }
    }

    async deleteCategory(req:Request<{id:string}>, res:Response, next:NextFunction){
        try{
            const deletedCategory = await this.service.deleteCategory(req.params.id);
            res.status(200).json({
                success: true,
                data: deletedCategory
            })
        }catch(error){
            next(error)
        }
    }
}

export default CategoryController;