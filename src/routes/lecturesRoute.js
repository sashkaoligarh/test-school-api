const {Router} = require("express");
const router = Router();
const Controller = require('../controllers/lectures')

router.get("/", Controller.get)

router.get("/:id", Controller.getById)

router.post("/",  Controller.add);

router.patch('/:id', Controller.update)

router.delete('/:id', Controller.remove)

module.exports = router;