/**
 * @swagger
 *  components:
 *    schemas:
 *      Students:
 *        type: object
 *        required:
 *          - matric_no
 *          - firstname
 *          - lastname
 *          - middlename
 *          - level
 *          - hallOfResidence
 *        properties:
 *          matric_no:
 *            type: string
 *            description: matric_no for the student, needs to be unique.
 *          firstname:
 *            type: string
 *          lastname:
 *            type: string
 *          middlename:
 *            type: string
 *          level:
 *            type: string
 *          hallOfResidence:
 *            type: string
 *        example:
 *           matric_no: ABC1234PHE
 *           firstname: John
 *           middlename: Jonathan
 *           lastname: Doe
 *           level: 300
 *           hallOfResidence: Lord Tedder Hall
 */

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  matric_no:{
    unique: true,
    required: true,
    type: String
  },
  firstname:{
    required: true,
    type: String
  },
  middlename:{
    type: String
  },
  lastname:{
    required: true,
    type: String
  },
  level:{
    required: true,
    type: Number
  },
  hallOfResidence:{
    required: true,
    type: String
  },
})

module.exports = mongoose.model('Students', schema);