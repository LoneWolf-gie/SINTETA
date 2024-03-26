const { checkAlumnaeExist, addAlumnae } = require('../../controllers/alumnae/addAlumnae');
const { deleteAlumnae } = require('../../controllers/alumnae/deleteAlumnae');
const { getAlumnae } = require('../../controllers/alumnae/getAlumnae');
const { updateAlumnae } = require('../../controllers/alumnae/updateAlumnae');
const checkAlumnae = require('../../middleware/checkAlumnae');
const authPage = require('../../middleware/checkRole');
const checkToken = require('../../middleware/checkToken');
const unlinkImage = require('../../middleware/unlinkImage');
const uploadImage = require('../../middleware/uploadImage');
const { validateRequest } = require('../../middleware/validateRequest');
const { alumnaeValidation } = require('../../validator/alumnaeValidation');

const router = require('express').Router();

router.post("/add-alumnae", checkToken, authPage(['admin', 'superadmin']), validateRequest(alumnaeValidation), checkAlumnaeExist, uploadImage, addAlumnae)
router.get("/", getAlumnae)
router.put("/update-alumnae/:uuid", checkToken, authPage(['admin', 'superadmin']), validateRequest(alumnaeValidation), checkAlumnae, uploadImage, unlinkImage, updateAlumnae)
router.delete("/delete-alumnae/:uuid", checkToken, authPage(['admin', 'superadmin']), checkAlumnae, unlinkImage, deleteAlumnae)

module.exports = router;