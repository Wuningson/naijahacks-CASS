/**
 * @swagger
 * tags:
 *   name: Updates
 *   description: Get and select updates
 */


//Node modules
const express = require('express');
const router = express.Router();
//App modules
const updatesCtrl = require('../controllers/updates.controllers');

router.route('/api/updates/getUpdates').get(updatesCtrl.getUpdates);

/**
 * @swagger
 * path:
 *  /api/updates/getUpdates:
 *    get:
 *      summary: Get all updates with isAlertActive false
 *      tags: [Updates]
 *      responses:
 *        "200":
 *          description: Updates
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Updates'
 *        "500":
 *           description: Something went wrong
 */


router.route('/api/updates/selectUpdate').post(updatesCtrl.selectUpdate);

/**
 * @swagger
 * path:
 *  /api/students/create:
 *    post:
 *      summary: Create a new Student
 *      tags: [Updates]
 *      requestBody:
 *        required: true
 *        schema:
 *          type: String
 *          required: true
 *          description: Send id { id }
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


module.exports = router;