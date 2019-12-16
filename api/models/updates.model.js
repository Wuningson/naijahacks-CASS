/**
 * @swagger
 *  components:
 *    schemas:
 *      Updates:
 *        type: object
 *        required:
 *          - matric_no
 *          - locationUrl
 *          - isAlertActive
 *          - saved
 *        properties:
 *          matric_no:
 *            type: string
 *            description: matric_no for the student, needs to be unique.
 *          locationUrl:
 *            type: string
 *            description: provides the location of the student on google maps
 *          isAlertActive:
 *            type: string
 *            description: shows whether the update has been selected for follow up by a security agent, default value of false
 *          saved:
 *            type: string
 *            description: Sent by the student when he/she survives the attack. Default value of false
 *        example:
 *           matric_no: ABC1234PHE
 *           locationUrl: https://maps.google.com
 *           isAlertActive: false
 *           saved: false
 */


const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  matric_no:{
    type: String,
    required: true
  },
  locationUrl:{
    type: String,
    required: true
  },
  isAlertActive:{
    type: Boolean,
    required: true,
    default: false
  },
  saved: {
    type: Boolean,
    default: false,
    required: true
  }
})

module.exports = mongoose.model('Updates', schema);