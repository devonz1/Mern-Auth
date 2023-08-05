const express = require('express');
const dotenv =  require ('dotenv').config()
const cors = require ('cors');
const {mongoose} =require('mongoose');

const app = express();

//database connection
mongoose.connect(process.env.MONGOS_URL)
.then(()=> console.log ('Database Connected'))
.catch((err) => console.log ('Database not connected', err))

//middleware 
app.use(express.json())

app.use('/', require ('./routes/authRoutes'))

const Port = 8000;
app.listen(Port,()=> console.log(`server is running on port ${Port}`))


//line 7 we are connecting our database to our app
 //by using the built in method mongoose.connect then using the password 
 // that we have from our mongodb database that we saveD in our .env file under
 // the variable MONG0_URL.