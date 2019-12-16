//Node modules
const express = require('express');
const router = express.Router();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


//Docs setup
const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Api docs",
      version: "1.0.0",
      description:
        "Naijahacks hackathon",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/"
      },
      contact: {
        name: "Swagger",
        url: "https://swagger.io",
        email: "Info@SmartBear.com"
      }
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1"
      }
    ]
  },
  apis: ["./models/students.model.js", "./models/updates.model.js", "./routes/students.routes.js", "./routes/updates.routes.js"]
};

const specs = swaggerJsdoc(options);
router.use("/docs", swaggerUi.serve);

router.get(
  "/docs",
  swaggerUi.setup(specs, {
    explorer: true
  })
);

module.exports = router;