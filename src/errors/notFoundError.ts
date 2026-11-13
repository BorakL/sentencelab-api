import { AppError } from "./appError.js";

export class NotFoundError extends AppError{
    constructor(message = "Resouce not found"){
        super(404, message);
        this.name = "NotFoundError";
    }
}