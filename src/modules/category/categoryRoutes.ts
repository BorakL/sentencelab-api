
import { Router } from "express";
import categoryController from "./categoryController.js";
import validatePagination from "../../middleware/validatePagination.js";
import validateObjectId from "../../middleware/validateObjectId.js";

const router = Router();


/////////////// CREATE CATEGORY ///////////////

router.post("/", (req, res, next) =>
    categoryController.createCategory(req, res, next)
);


/////////////// GET CATEGORIES ///////////////

router.get(
    "/",
    validatePagination,
    (req, res, next) =>
        categoryController.getPaginatedCategories(req, res, next)
);


/////////////// GET CATEGORY BY ID ///////////////

router.get(
    "/:id",
    validateObjectId,
    (req, res, next) =>
        categoryController.getCategoryById(req, res, next)
);


/////////////// UPDATE CATEGORY ///////////////

router.patch(
    "/:id",
    validateObjectId,
    (req, res, next) =>
        categoryController.updateCategory(req, res, next)
);


/////////////// DELETE CATEGORY ///////////////

router.delete(
    "/:id",
    validateObjectId,
    (req, res, next) =>
        categoryController.deleteCategory(req, res, next)
);


export default router;
