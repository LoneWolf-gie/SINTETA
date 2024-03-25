const express = require('express');
const checkToken = require('../../middleware/checkToken');
const authPage = require('../../middleware/checkRole');
const uploadImage = require('../../middleware/uploadImage');
const { checkTestimonialExist, addTestimonial } = require('../../controllers/testimonial/addTestimonial');
const { testimonialValidation } = require('../../validator/testimonialValidation');
const { validateRequest } = require('../../middleware/validateRequest');
const checkTestimonial = require('../../middleware/checkTestimonial');
const unlinkImage = require('../../middleware/unlinkImage');
const { updateTestimonial } = require('../../controllers/testimonial/updateTestimonial');
const { deleteTestimonial } = require('../../controllers/testimonial/deleteTestimonial');
const { getAllTestimonial } = require('../../controllers/testimonial/getTestimonial');
const { paginationTestimonial } = require('../../controllers/testimonial/paginationTestimonial');
const { filterTestimonial } = require('../../controllers/testimonial/filterTestimonial');

const router = express.Router();

router.post('/add-Testimonial', checkToken, authPage(['admin', 'superadmin']), validateRequest(testimonialValidation), checkTestimonialExist, uploadImage, addTestimonial)
router.get('/', getAllTestimonial)
router.post('/filter', filterTestimonial)
router.post('/pagination', paginationTestimonial)
router.put('/update-testimonial/:uuid', checkToken, authPage(['admin', 'superadmin']), validateRequest(testimonialValidation), checkTestimonial, uploadImage, unlinkImage, updateTestimonial)
router.delete('/delete-testimonial/:uuid', checkToken, authPage(['admin', 'superadmin']), checkTestimonial, unlinkImage, deleteTestimonial)

module.exports = router;