const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser } = require('../controllers/authController')



//middleware
router.use(
     cors({
          credentials: true,
          allowOrigin: 'http://127.0.0.1:5173', 
          allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
          allowedMethods: [POST, PUT, GET, DELETE],
     })

)

router.get('/', test)
router.post('/register',registerUser)
module.exports = router




///Line 12 to make sure we prevent any cors error blocks  we have to make sure  that
///the origin on line 12  is the same url as the supplied origin
//in the console tab otherwise it will be  blocked by cors policy.

//Line 18 This will allow the  user to register on our app and after that we will
// be sending the post request to our endpoint of register which will add the user registration information to our database.
