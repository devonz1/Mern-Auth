const test = (req, res) =>{
    res.json('test is working')
}


const registerUser = (req, res) =>{
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
        return res.json()
     }
    } catch {error}{

    }
}

module.exports = {
    test,
    registerUser
}

 