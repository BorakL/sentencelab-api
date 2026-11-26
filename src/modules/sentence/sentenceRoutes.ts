import { Router } from "express";
import validatePagination from "../../middleware/validatePagination.js";
import validateObjectId from "../../middleware/validateObjectId.js";
import sentenceController from "./sentenceController.js";

const router = Router();


/////////////// CREATE SENTENCE ///////////////

router.post("/", (req,res,next) => 
    sentenceController.createSentence(req,res,next)
)


/////////////// GET SENTENCES ///////////////

router.get(
    "/",
    validatePagination,
    (req,res,next) => 
        sentenceController.getPaginatedSentences(req,res,next)
)


/////////////// GET SENTENCE BY ID ///////////////

router.get(
    "/:id",
    validateObjectId,
    (req,res,next) => 
        sentenceController.getSentenceById(req,res,next)
);


/////////////// UPDATE SENTENCE ///////////////

router.patch(
    "/:id",
    validateObjectId,
    (req, res, next) =>
        sentenceController.updateSentence(req, res, next)
);


/////////////// DELETE SENTENCE ///////////////

router.delete(
    "/:id",
    validateObjectId,
    (req, res, next) =>
        sentenceController.deleteSentence(req, res, next)
);


export default router;