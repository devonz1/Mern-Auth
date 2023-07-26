const express = require('express');
const dotenv =  require ('dotenv').config()
const cors = require ('cors');
const {mongoose} =require('mongoose')


//database connection
mongoose.connect(process. )
.then(()=> console.log ('Database Connected'))
.catch((err) => console.log ('Database not connected', err))

const app = express();

app.use('/', require ('./routes/authRoutes'))

const port = 8000;
app.listen(port,()=> console.log(`server is running on port ${port}`))


//line 7 we are connecting our database to our app
 //by using the built in method mongoose.connect then using the password 
 // that we have from our mongodb database that we saveD in our .env file under
 // the variable MONG0_URL.