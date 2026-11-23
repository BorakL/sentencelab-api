import type { NextFunction, Request, Response } from "express"
import { ValidationError } from "../errors/validationError.js";

const validatePagination = (req:Request, res:Response, next:NextFunction) => {
    const page = Number(req.query.page ?? 1);
    const limit = Number(req.query.limit ?? 10);
    if(
        !Number.isInteger(page) ||
        !Number.isInteger(limit) ||
        page < 1 || limit > 100
    ){
        return next(new ValidationError("Invalid pagination parameters"))
    }
    res.locals.pagination = {page, limit};
    next();
}

export default validatePagination;