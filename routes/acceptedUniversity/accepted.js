const router = require('express').Router();
const checkToken = require('../../middleware/checkToken');
const authPage = require('../../middleware/checkRole');
const { checkAcceptedExist, addAccepted } = require('../../controllers/acceptedUniversity/addAccepted');
const { validateRequest } = require('../../middleware/validateRequest');
const { AcceptedValidation } = require('../../validator/acceptedValidation');
const uploadImage = require('../../middleware/uploadImage');
const { getAccepted } = require('../../controllers/acceptedUniversity/getAccepted');
const checkAccepted = require('../../middleware/checkAccepted');
const unlinkImage = require('../../middleware/unlinkImage');
const { updateAccepted } = require('../../controllers/acceptedUniversity/updateAccepted');
const { deleteAccepted } = require('../../controllers/acceptedUniversity/deleteAccepted');


router.post("/add-acceptedUniversity", checkToken, authPage(['admin', 'superadmin']), validateRequest(AcceptedValidation), checkAcceptedExist, uploadImage, addAccepted)
router.get("/", getAccepted)
router.put("/update-acceptedUniversity/:uuid", checkToken, authPage(['admin', 'superadmin']), validateRequest(AcceptedValidation), checkAccepted, uploadImage, unlinkImage, updateAccepted)
router.delete("/delete-acceptedUniversity/:uuid", checkToken, authPage(['admin', 'superadmin']), checkAccepted, unlinkImage, deleteAccepted)

module.exports = router