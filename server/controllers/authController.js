const User = require('../models/user')
const {hashPassword, comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken');


const test = (req, res) =>{
    res.json('test is working')
}

// Register Endpoint
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
      
    const hashedPassword = await hashPassword(password)
    //Create user in database
    const user = await User.create({
        name, 
        email, 
        password:hashedPassword,
    });

    return res.json(user)
    } catch (error){ 
        console.log(error)

    }
}

//Login Endpoint 
const loginUser = async (req, res) =>{
  try{
   const {email, password} = req.body;

   //check if user exists
   const user= await User.findOne({email});
    if(!user){
        return res.json({
            error: 'No user Found'
        })
    }


    //Check if passwords match
    const match = await comparePassword(password, user.password)
    if(match){
     jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET,{},(err,token)=>{
        if(err) throw err;
        res.cookie('token',token).json(user)
     } )
     }
     if(!match){
       return res.json({
          error: "Passwords do not match"  
        })
     }
  }catch(error){
   console.log(error)
  }
}

const getProfile = (req, res) =>{
const {token} = req.cookies
if (token){
  jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
    if (err) throw err;
    res.json(user)
  })
}else{
  res.json(null)
}

}



module.exports = {
    test,
    registerUser,
    loginUser,
  getProfile
};



/*Line 2 we have imported the hashpassword and compare password
 function from the helpers file*/

///Line 4 we have created a test that will test the backend endpoints with a req and resp
/// to make sure everything is workign fine and we will send back a res.json that
//the test is working.

 ///Line 26 we will be checking our database with the finOne method
 //to see if the email the user has chosen to use has been taken already
 //by another user and if it has we will return 
 // a json response with  an error message that says  the "email is taken already".