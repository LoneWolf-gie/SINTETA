const { addProgram } = require('../../controllers/program/addProgram');
const { checkProgramExist } = require('../../controllers/program/addProgram');
const { deleteProgram } = require('../../controllers/program/deleteProgram');
const { getProgram } = require('../../controllers/program/getProgram');
const { getProgramById } = require('../../controllers/program/getProgramById');
const { updateProgram } = require('../../controllers/program/updateProgram');
const checkProgram = require('../../middleware/checkProgram');
const authPage = require('../../middleware/checkRole');
const checkToken = require('../../middleware/checkToken');
const unlinkImage = require('../../middleware/unlinkImage');
const uploadImage = require('../../middleware/uploadImage');
const { validateRequest } = require('../../middleware/validateRequest');
const { programValidation } = require('../../validator/programValidation');

const router = require('express').Router();

router.post("/add-program", checkToken, authPage(['admin', 'superadmin']), validateRequest(programValidation), checkProgramExist, uploadImage, addProgram)
router.get("/", getProgram)
router.get("/:uuid", getProgramById)
router.put("/update-program/:uuid", checkToken, authPage(['admin', 'superadmin']), validateRequest(programValidation), checkProgram, uploadImage, unlinkImage, updateProgram)
router.delete("/delete-program/:uuid", checkToken, authPage(['admin', 'superadmin']), checkProgram, unlinkImage, deleteProgram)

module.exports = router;