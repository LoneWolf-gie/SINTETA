const express = require('express');
const checkToken = require('../../middleware/checkToken');
const authPage = require('../../middleware/checkRole');
const { checkBulletinExist, addBulletin } = require('../../controllers/bulletin/addBulletin');
const uploadImage = require('../../middleware/uploadImage');
const { getBulletin } = require('../../controllers/bulletin/getBulletin');
const { getBulletinById } = require('../../controllers/bulletin/getBulletinById');
const unlinkImage = require('../../middleware/unlinkImage');
const { updateBulletin } = require('../../controllers/bulletin/updateBulletin');
const { validateRequest } = require('../../middleware/validateRequest');
const { bulletinValidation } = require('../../validator/bulletinValidation');
const { deleteBulletin } = require('../../controllers/bulletin/deleteBulletin');
const checkBulletin = require('../../middleware/checkBulletin');
const router = express.Router();

router.post('/add-bulletin', checkToken, authPage(['admin', 'superadmin']), validateRequest(bulletinValidation), checkBulletinExist, uploadImage, addBulletin);
router.get('/', getBulletin);
router.get('/:uuid', getBulletinById)
router.put('/update-bulletin/:uuid', checkToken, authPage(['admin', 'superadmin']), validateRequest(bulletinValidation), checkBulletin, uploadImage, unlinkImage, updateBulletin)
router.delete('/delete-bulletin/:uuid', checkToken, authPage(['admin', 'superadmin']), checkBulletin, unlinkImage, deleteBulletin)

module.exports = router