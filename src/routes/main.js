/**
 * Global dependencies
 */
const express = require('express');
const router = express.Router();
const axios = require("axios");


/**
 * GET - Index page
 */
router.get('/', async function(request, response, next){
    response.status(200);
    response.render('main');
});


module.exports = router;