const express = require('express');
const checkToken = require('../../middleware/checkToken');
const authPage = require('../../middleware/checkRole');
const uploadImage = require('../../middleware/uploadImage');
const { checkReviewExist, addReview } = require('../../controllers/review/addReview');
const { reviewValidation } = require('../../validator/reviewValidation');
const { validateRequest } = require('../../middleware/validateRequest');
const checkReview = require('../../middleware/checkReview');
const unlinkImage = require('../../middleware/unlinkImage');
const { updateReview } = require('../../controllers/review/updateReview');
const { deleteReview } = require('../../controllers/review/deleteReview');
const { getAllReview } = require('../../controllers/review/getReview');
const { paginationReview } = require('../../controllers/review/paginationReview');

const router = express.Router();

router.post('/create-review', checkToken, authPage(['admin', 'superadmin']), validateRequest(reviewValidation), checkReviewExist, uploadImage, addReview)
router.get('/', getAllReview)
router.post('/pagination', paginationReview)
router.put('/update-review/:uuid', checkToken, authPage(['admin', 'superadmin']), validateRequest(reviewValidation), checkReview, uploadImage, unlinkImage, updateReview)
router.delete('/delete-review/:uuid', checkToken, authPage(['admin', 'superadmin']), checkReview, unlinkImage, deleteReview)

module.exports = router;