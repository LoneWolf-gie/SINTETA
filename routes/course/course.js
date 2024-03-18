const express = require('express');
const { addCourse, checkCourseExist } = require('../../controllers/course/addCourse');
const uploadImage = require('../../middleware/uploadImage');
const checkToken = require('../../middleware/checkToken');
const authPage = require('../../middleware/checkRole');
const { courseValidation } = require('../../validator/courseValidation');
const { validateRequest } = require('../../middleware/validateRequest');
const checkCourse = require('../../middleware/checkCourse');
const unlinkImage = require('../../middleware/unlinkImage');
const { updateCourse } = require('../../controllers/course/updateCourse');
const { deleteCourse } = require('../../controllers/course/deleteCourse');
const { getAllCourse } = require('../../controllers/course/getCourse');
const { searchCourse } = require('../../controllers/course/searchCourse');
const { getCourseById } = require('../../controllers/course/getCourseById');
const { paginationCourse } = require('../../controllers/course/paginationCourse');

const router = express.Router();


router.post('/add-course', checkToken, authPage(['admin', 'superadmin']), validateRequest(courseValidation), checkCourseExist, uploadImage, addCourse);
router.get('/', getAllCourse)
router.get('/:uuid', getCourseById)
router.get('/search', searchCourse)
router.get('/course/pagination', paginationCourse)
router.put('/update-course/:uuid', checkToken, authPage(['admin', 'superadmin']), validateRequest(courseValidation), checkCourse, uploadImage, unlinkImage, updateCourse)
router.delete('/delete-course/:uuid', checkToken, authPage(['admin', 'superadmin']), checkCourse, unlinkImage, deleteCourse)


module.exports = router;
