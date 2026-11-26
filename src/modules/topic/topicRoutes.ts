import { Router } from "express";
import validatePagination from "../../middleware/validatePagination.js";
import validateObjectId from "../../middleware/validateObjectId.js";
import topicController from "./topicController.js";

const router = Router();


/////////////// CREATE TOPIC ///////////////

router.post("/", (req,res,next) => 
    topicController.createTopic(req,res,next)
)


/////////////// GET TOPICS ///////////////

router.get(
    "/",
    validatePagination,
    (req,res,next) => 
        topicController.getPaginatedTopics(req,res,next)
)


/////////////// GET TOPIC BY ID ///////////////

router.get(
    "/:id",
    validateObjectId,
    (req,res,next) => 
        topicController.getTopicById(req,res,next)
);


/////////////// UPDATE TOPIC ///////////////

router.patch(
    "/:id",
    validateObjectId,
    (req, res, next) =>
        topicController.updateTopic(req, res, next)
);


/////////////// DELETE TOPIC ///////////////

router.delete(
    "/:id",
    validateObjectId,
    (req, res, next) =>
        topicController.deleteTopic(req, res, next)
);


export default router;