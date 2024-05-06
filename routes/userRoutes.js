const router = require('express').Router()
const userControllers=require('../controllers/userControllers')

// make a create user API
router.post('/create',userControllers.createUser)

// controller - Routes - (index.js)

// exporting
module.exports=router;