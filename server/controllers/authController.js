const User = require('../models/user')
const {hashPassword, comparePassword} = require('../helpers/auth')


const test = (req, res) =>{
    res.json('test is working')
}


const registerUser = async (req, res) =>{
    try {
    const {name, email , password} = req.body;
     // check if name was entered
     if(!name){
        return res.json({
            error: 'name is required'
     })
     };
     // check is password good
     if(!password || password.length < 6 ){
        return res.json(
            {
              error: 'Password is required and should be at least 6 characters long'  
            } )
     };
     
      //check email
      const exist = await User.findOne({email});
      if (exist ){
        return res.json(
          { error: 'Email is taken already'
        })
    }

    const user = await User.create({
        name, email, password
    })

    return res.json(user)
    } catch (error){ 
        console.log(error)

    }
}

module.exports = {
    test,
    registerUser
}



/*Line 2 we have imported the hashpassword and compare password
 function from the helpers file*/

///Line 4 we have created a test that will test the backend endpoints with a req and resp
/// to make sure everything is workign fine and we will send back a res.json that
//the test is working.

 ///Line 26 we will be checking our database with the finOne method
 //to see if the email the user has chosen to use has been taken already
 //by another user and if it has we will return 
 // a json response with  an error message that says  the "email is taken already".