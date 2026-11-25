import ExpressionModel from "../../models/expression/expressionModel.js";
import type { IExpressionDoc } from "../../models/expression/expressionTypes.js";
import BaseRepository from "../../repositories/baseRepository.js";

class ExpressionRepository extends BaseRepository<IExpressionDoc>{
    constructor(){
        super(ExpressionModel)
    }
}

export default ExpressionRepository;