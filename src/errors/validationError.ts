import { AppError } from "./appError.js";

export class ValidationError extends AppError{
    constructor(message = "Invalid data"){
        super(400, message);
        this.name = "ValidationError";
    }
}