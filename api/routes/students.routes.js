/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Students creation, validation and saved upates
 */



//Node module
const express = require('express');
const router = express.Router();

//App modules
const studentsCtrl = require('../controllers/student.controllers');
const checkAuth = require('../middlewares/checkAuth');

router.route('/api/students/create').post(studentsCtrl.create);

/**
 * @swagger
 * path:
 *  /api/students/create:
 *    post:
 *      summary: Create a new Student
 *      tags: [Students]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Students'
 *      responses:
 *        "200":
 *          description: Student data stored successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Students'
 *        "500":
 *           description: Something went wrong
 */


router.route('/api/students/validate').post(studentsCtrl.login);

/**
 * @swagger
 * path:
 *  /api/students/validate:
 *    post:
 *      summary: Validate students matric no against stored Students in database
 *      tags: [Students]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: String
 *              description: Student matric_no is sent
 *      responses:
 *        "200":
 *          description: A Student schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Students'
 *        "500":
 *           description: Something went wrong
 */


router.route('/api/students/sendAlert').post(checkAuth, studentsCtrl.sendAlert);


/**
 * @swagger
 * path:
 *  /api/students/sendAlert:
 *    post:
 *      summary: Send alert 
 *      tags: [Students]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: String
 *              description: User long and lat is sent along with token stored as cookies. {long, lat}
 *      responses:
 *        "200":
 *          description: Student matric_no is in trouble
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Updates'
 *        "500":
 *           description: Something went wrong
 */


router.route('/api/students/savedUpdate').post(studentsCtrl.savedUpdate);

/**
 * @swagger
 * path:
 *  /api/students/savedUpdate:
 *    post:
 *      summary: Send update alert for Student
 *      tags: [Students]
 *      requestBody:
 *        schema:
 *          type: String
 *          required: true
 *          description: update id  { id }
 *      responses:
 *        "200":
 *          description: This student is saved
 *        "500":
 *           description: Something went wrong
 */

module.exports = router;
