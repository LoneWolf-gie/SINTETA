const router = require('express').Router();
const checkToken = require('../../middleware/checkToken');
const authPage = require('../../middleware/checkRole');
const { checkBannerExist, addBanner } = require('../../controllers/banner/addBanner');
const { validateRequest } = require('../../middleware/validateRequest');
const { bannerValidation } = require('../../validator/bannerValidation');
const uploadImage = require('../../middleware/uploadImage');
const { getBanner } = require('../../controllers/banner/getBanner');
const checkBanner = require('../../middleware/checkBanner');
const unlinkImage = require('../../middleware/unlinkImage');
const { updateBanner } = require('../../controllers/banner/updateBanner');
const { deleteBanner } = require('../../controllers/banner/deleteBanner');
const { filterBanner } = require('../../controllers/banner/filterBanner');

router.post('/add-banner', checkToken, authPage(['admin', 'superadmin']), validateRequest(bannerValidation), checkBannerExist, uploadImage, addBanner)
router.get('/', getBanner)
router.post('/filter', filterBanner)
router.put('/update-banner/:uuid', checkToken, authPage(['admin', 'superadmin']), validateRequest(bannerValidation), checkBanner, uploadImage, unlinkImage, updateBanner)
router.delete('/delete-banner/:uuid', checkToken, authPage(['admin', 'superadmin']), checkBanner, unlinkImage, deleteBanner)

module.exports = router;