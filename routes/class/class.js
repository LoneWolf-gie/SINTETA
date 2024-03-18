const express = require('express');
const checkToken = require('../../middleware/checkToken');
const authPage = require('../../middleware/checkRole');
const { validateRequest } = require('../../middleware/validateRequest');
const { addClass, checkClassExist } = require('../../controllers/class/addClass');
const { classValidation } = require('../../validator/classValidation');
const uploadImage = require('../../middleware/uploadImage');
const unlinkImage = require('../../middleware/unlinkImage');
const { updateClass } = require('../../controllers/class/updateClass');
const checkClass = require('../../middleware/checkClass');
const { deleteClass } = require('../../controllers/class/deleteClass');
const { getClass } = require('../../controllers/class/getClass');
const router = express.Router();

router.post('/add-class', checkToken, authPage(['admin', 'superadmin']), validateRequest(classValidation), checkClassExist, uploadImage, addClass);
router.get('/', getClass)
router.put('/update-class/:uuid', checkToken, authPage(['admin', 'superadmin']), validateRequest(classValidation), checkClass, uploadImage, unlinkImage, updateClass);
router.delete('/delete-class/:uuid', checkToken, authPage(['admin', 'superadmin']), checkClass, unlinkImage, deleteClass);

module.exports = router;