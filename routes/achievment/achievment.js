const express = require('express');
const { achievmentValidation } = require('../../validator/achievmentValidation');
const { getAchievment } = require('../../controllers/achievment/getAchievment');
const { addAchievmentClass, checkAchievmentExist } = require('../../controllers/achievment/addAchievmentClass');
const { validateRequest } = require('../../middleware/validateRequest');
const uploadImage = require('../../middleware/uploadImage');
const checkAchievment = require('../../middleware/checkAchievment');
const unlinkImage = require('../../middleware/unlinkImage');
const { updateAchievment } = require('../../controllers/achievment/updateAchievment');
const checkToken = require('../../middleware/checkToken');
const authPage = require('../../middleware/checkRole');
const { deleteAchievment } = require('../../controllers/achievment/deleteAchievment');
const router = express.Router();

router.get('/', getAchievment)
router.post('/add-achievment', checkToken, authPage(['admin', 'superadmin']), validateRequest(achievmentValidation), checkAchievmentExist, uploadImage, addAchievmentClass)
router.put('/update-achievment', checkToken, authPage(['admin', 'superadmin']), validateRequest(achievmentValidation), checkAchievment, unlinkImage, uploadImage, updateAchievment)
router.delete('delete-achievment', checkToken, authPage(['admin', 'superadmin']), checkAchievment, unlinkImage, deleteAchievment)

module.exports = router