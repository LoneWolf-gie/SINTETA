const { checkFacilityExist, addFacility } = require("../../controllers/facility/addFacility");
const { deleteFacility } = require("../../controllers/facility/deleteFacility");
const { getFacility } = require("../../controllers/facility/getFacility");
const { updateFacility } = require("../../controllers/facility/updateFacility");
const checkFacility = require("../../middleware/checkFacility");
const authPage = require("../../middleware/checkRole");
const checkToken = require("../../middleware/checkToken");
const unlinkImage = require("../../middleware/unlinkImage");
const uploadImage = require("../../middleware/uploadImage");
const { validateRequest } = require("../../middleware/validateRequest");
const { facilityValidation } = require("../../validator/facilityValidation");

const router = require("express").Router();

router.post("/add-facility", checkToken, authPage(['admin', 'superadmin']), validateRequest(facilityValidation), checkFacilityExist, uploadImage, addFacility)
router.get("/", getFacility)
router.put("/update-facility/:uuid", checkToken, authPage(['admin', 'superadmin']), validateRequest(facilityValidation), checkFacility, uploadImage, unlinkImage, updateFacility)
router.delete("/delete-facility/:uuid", checkToken, authPage(['admin', 'superadmin']), checkFacility, unlinkImage, deleteFacility)

module.exports = router