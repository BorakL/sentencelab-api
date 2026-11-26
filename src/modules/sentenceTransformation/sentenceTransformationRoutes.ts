import { Router } from "express";
import validatePagination from "../../middleware/validatePagination.js";
import validateObjectId from "../../middleware/validateObjectId.js";
import sentenceTransformationController from "./sentenceTransformationController.js";

const router = Router();


/////////////// CREATE SENTENCE TRANSFORMATION ///////////////

router.post("/", (req,res,next) => 
    sentenceTransformationController.createSentenceTransformation(req,res,next)
)


/////////////// GET SENTENCE TRANSFORMATIONS ///////////////

router.get(
    "/",
    validatePagination,
    (req,res,next) => 
        sentenceTransformationController.getPaginatedSentenceTransformations(req,res,next)
)


/////////////// GET SENTENCE TRANSFORMATION BY ID ///////////////

router.get(
    "/:id",
    validateObjectId,
    (req,res,next) => 
        sentenceTransformationController.getSentenceTransformationById(req,res,next)
);


/////////////// UPDATE SENTENCE TRANSFORMATION ///////////////

router.patch(
    "/:id",
    validateObjectId,
    (req, res, next) =>
        sentenceTransformationController.updateSentenceTransformation(req, res, next)
);


/////////////// DELETE SENTENCE TRANSFORMATION ///////////////

router.delete(
    "/:id",
    validateObjectId,
    (req, res, next) =>
        sentenceTransformationController.deleteSentenceTransformation(req, res, next)
);


export default router;