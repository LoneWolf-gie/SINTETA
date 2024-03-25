const router = require('express').Router();
const checkToken = require('../../middleware/checkToken');
const authPage = require('../../middleware/checkRole');
const { checkOfficeExist, addOffice } = require('../../controllers/office/addOffice');
const uploadImage = require('../../middleware/uploadImage');
const { officeValidation } = require('../../validator/officeValidation');
const { validateRequest } = require('../../middleware/validateRequest');
const { getOffice } = require('../../controllers/office/getOffice');
const { getOfficeById } = require('../../controllers/office/getOfficeById');
const { searchOffice } = require('../../controllers/office/searchOffice');
const checkOffice = require('../../middleware/checkOffice');
const unlinkImage = require('../../middleware/unlinkImage');
const { updateOffice } = require('../../controllers/office/updateOffice');
const { deleteOffice } = require('../../controllers/office/deleteOffice');

router.post("/add-office", checkToken, authPage(['admin', 'superadmin']), validateRequest(officeValidation), checkOfficeExist, uploadImage, addOffice)
router.get("/", getOffice)
router.get("/:uuid", getOfficeById)
router.post('/search', searchOffice)
router.put("/update-office/:uuid", checkToken, authPage(['admin', 'superadmin']), validateRequest(officeValidation), checkOffice, uploadImage, unlinkImage, updateOffice)
router.delete("/delete-office/:uuid", checkToken, authPage(['admin', 'superadmin']), checkOffice, unlinkImage, deleteOffice)


module.exports = router;