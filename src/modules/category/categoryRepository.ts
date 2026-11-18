import BaseRepository from "../../repositories/baseRepository.js";
import type { ICategoryDoc } from "../../models/category/categoryTypes.js";
import CategoryModel from "../../models/category/categoryModel.js";

class CategoryRepository extends BaseRepository<ICategoryDoc>{
    constructor(){
        super(CategoryModel)
    }
}


export default CategoryRepository;