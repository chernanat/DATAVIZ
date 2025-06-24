const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerUiAdmin = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')
const fileAdmin  = fs.readFileSync('./datavizAdmin.yaml', 'utf8')
const fileUser  = fs.readFileSync('./datavizUser.yaml', 'utf8')
const swaggerDocumentAdmin = YAML.parse(fileAdmin)
const swaggerDocumentUser = YAML.parse(fileUser)
// const swaggerDocument = require('./isolated.yaml');

var options = {    
    customSiteTitle: "DataViz Isolated API",
    customfavIcon: "/assets/favicon.ico",
    customCss: '.swagger-ui .topbar { display: none }',
    customCssUrl: '/assets/custom.css',
    customJs: '/assets/custom.js'
  }
  
  app.use('/assets', express.static('assets'))

  app.use('/user', swaggerUi.serveFiles(swaggerDocumentUser), swaggerUi.setup(swaggerDocumentUser, options));

  app.use('/admin', swaggerUi.serveFiles(swaggerDocumentAdmin), swaggerUiAdmin.setup(swaggerDocumentAdmin, options));


  const PORT = process.env.PORT || 9000;
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });