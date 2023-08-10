const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser } = require('../controllers/authController')



//middleware
router.use(
     cors({
          credentials: true,
          origin: 'http://127.0.0.1:5173',
          allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
          methods: ["POST", "PUT", "GET", "DELETE"],
     })

)

router.get('/', test)
router.post('/register', registerUser)
module.exports = router


//line 14 we have all the methods that are allowed to make requests in an array of
// strings. this will lets cors know that anytime we make any of these request on the server
//to allow them and not block the request.

///Line 12 to make sure we prevent any cors error blocks  we have to make sure  that
///the origin on line 12  is the same url as the supplied origin
//in the console tab otherwise it will be  blocked by cors policy.

//Line 18 This will allow the  user to register on our app and after that we will
// be sending the post request to our endpoint of register which will add the user registration information to our database.
