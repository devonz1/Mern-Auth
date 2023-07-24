const mongoose = require('mongoose') // mongoose import
const {Schema} = mongoose // mongoose inbuilt property



///  the newSchema  will store an object that will have the 3 values 
// that we will be looking for when a user Registers for an account 
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true 
    },
    password: String
})

/// So our the name will be required to be a string 
/// the email will also be a string  and we want it to be a unique email so we will
// set the value  to true 
// and the password will also be a string

const UserModel = mongoose.model('User', userSchema);

 module.exports = UserModel;