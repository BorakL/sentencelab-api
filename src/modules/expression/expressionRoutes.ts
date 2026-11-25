import { Router } from "express";
import expressionController from "./expressionController.js";
import validatePagination from "../../middleware/validatePagination.js";
import validateObjectId from "../../middleware/validateObjectId.js";

const router = Router();


/////////////// CREATE EXPRESSION ///////////////

router.post("/", (req,res,next) => 
    expressionController.createExpression(req,res,next)
)


/////////////// GET EXPRESSIONS ///////////////

router.get(
    "/",
    validatePagination,
    (req,res,next) => 
        expressionController.getPaginatedExpressions(req,res,next)
)


/////////////// GET EXPRESSION BY ID ///////////////

router.get(
    "/:id",
    validateObjectId,
    (req,res,next) => 
        expressionController.getExpressionById(req,res,next)
);


/////////////// UPDATE EXPRESSION ///////////////

router.patch(
    "/:id",
    validateObjectId,
    (req, res, next) =>
        expressionController.updateExpression(req, res, next)
);


/////////////// DELETE EXPRESSION ///////////////

router.delete(
    "/:id",
    validateObjectId,
    (req, res, next) =>
        expressionController.deleteExpression(req, res, next)
);


export default router;