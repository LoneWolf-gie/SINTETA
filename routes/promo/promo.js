const { addPromo } = require('../../controllers/promo/addPromo');
const { checkPromoExist } = require('../../controllers/promo/addPromo');
const { deletePromo } = require('../../controllers/promo/deletePromo');
const { getPromo } = require('../../controllers/promo/getPromo');
const { getPromoById } = require('../../controllers/promo/getPromoById');
const { updatePromo } = require('../../controllers/promo/updatePromo');
const checkPromo = require('../../middleware/checkPromo');
const authPage = require('../../middleware/checkRole');
const checkToken = require('../../middleware/checkToken');
const unlinkImage = require('../../middleware/unlinkImage');
const uploadImage = require('../../middleware/uploadImage');
const { validateRequest } = require('../../middleware/validateRequest');
const { promoValidation } = require('../../validator/promoValidation');

const router = require('express').Router();


router.post("/add-promo", checkToken, authPage(['admin', 'superadmin']), validateRequest(promoValidation), checkPromoExist, uploadImage, addPromo)
router.get("/", getPromo)
router.get("/:uuid", getPromoById)
router.put("/update-promo/:uuid", checkToken, authPage(['admin', 'superadmin']), validateRequest(promoValidation), checkPromo, uploadImage, unlinkImage, updatePromo)
router.delete("/delete-promo/:uuid", checkToken, authPage(['admin', 'superadmin']), checkPromo, unlinkImage, deletePromo)

module.exports = router