import type { QueryFilter } from "mongoose";
import type { ICategory, ICategoryDoc, ICategoryParams } from "../../models/category/categoryTypes.js";
import type CategoryRepository from "./categoryRepository.js";

class CategoryService {
    private repository: CategoryRepository;
    
    constructor(repository: CategoryRepository){
        this.repository = repository;
    }
    
    async createCategory(data: ICategoryParams){
        return await this.repository.createOne(data)
    }

    async getCategoryById(id:string){
        return await this.repository.findById(id)
    }

    async getAllCategories(filter:QueryFilter<ICategory>){
        return await this.repository.findMany(filter);
    }

    async getPaginatedCategories(
        filter: QueryFilter<ICategory>,
        page = 1,
        limit = 10
    ) {
        return this.repository.findPaginated(filter, {
            page,
            limit
        });
    }

    async updateCategory(id:string, data:Partial<ICategoryParams>){
        return await this.repository.updateById(id,data);
    }

    async deleteCategory(id:string){
        return await this.repository.deleteById(id)
    }
}

export default CategoryService;


