const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test } = require('../controllers/authController')



//middleware
router.use(
     cors({
          credentials: true,
          origin: 'http://localhost:5173'
     })

)

router.get('/', test)
router.post('/register') /// This will allow the  user to register on our app and after that we will
// be sending the post request to our endpoint of register which will add the user registration information to our database.

module.exports = router


