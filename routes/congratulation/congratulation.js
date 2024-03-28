const { addCongratulation } = require('../../controllers/congratulation/addCongratulation');
const { checkCongratulationExist } = require('../../controllers/congratulation/addCongratulation');
const { deleteCongratulation } = require('../../controllers/congratulation/deleteCongratulation');
const { getCongratulation } = require('../../controllers/congratulation/getAccepted');
const { updateCongratulation } = require('../../controllers/congratulation/updateAccepted');
const checkCongratulation = require('../../middleware/checkCongratulation');
const authPage = require('../../middleware/checkRole');
const checkToken = require('../../middleware/checkToken');
const unlinkImage = require('../../middleware/unlinkImage');
const uploadImage = require('../../middleware/uploadImage');
const { validateRequest } = require('../../middleware/validateRequest');
const { congratulationValidation } = require('../../validator/congratulationValidation');

const router = require('express').Router();

router.post("/add-congratulation", checkToken, authPage(['admin', 'superadmin']), validateRequest(congratulationValidation), checkCongratulationExist, uploadImage, addCongratulation)
router.get("/", getCongratulation)
router.put("/update-congratulation/:uuid", checkToken, authPage(['admin', 'superadmin']), validateRequest(congratulationValidation), checkCongratulation, uploadImage, unlinkImage, updateCongratulation)
router.delete("/delete-congratulation/:uuid", checkToken, authPage(['admin', 'superadmin']), checkCongratulation, unlinkImage, deleteCongratulation)

module.exports = router