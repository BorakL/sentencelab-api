import type { NextFunction, Request, Response } from "express";
import { Types } from "mongoose";
import { ValidationError } from "../errors/validationError.js";

const validateObjectId = (req: Request<{id:string}>, res: Response, next: NextFunction ) => {
    const {id} = req.params;
    if(!id || !Types.ObjectId.isValid(id)){
        return next(new ValidationError("Invalid MongoDB ObjectId"));
    }
    next();
}

export default validateObjectId;