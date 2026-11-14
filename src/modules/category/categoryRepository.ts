import { model } from "mongoose";
import type { ICategoryDoc } from "../../models/categoryModel.js";
import BaseRepository from "../../repositories/baseRepository.js";

class CategoryRepository extends BaseRepository<ICategoryDoc>{

}


export default CategoryRepository;