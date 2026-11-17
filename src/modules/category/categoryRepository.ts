import { model } from "mongoose";
import BaseRepository from "../../repositories/baseRepository.js";
import type { ICategoryDoc } from "../../models/category/categoryTypes.js";

class CategoryRepository extends BaseRepository<ICategoryDoc>{

}


export default CategoryRepository;