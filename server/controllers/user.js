const User = require('../models').User;
const {hashPassword, verifyPassword, generateToken} = require('../utils/AuthHelper')

module.exports = {
  register(req, res) {
    const {name, email, password} = req.body;
    return User
      .create({
        name,
        email: email.toLowerCase(),
        password: hashPassword(password)
      })
      .then(user =>{
        //    Generate token
           const token = generateToken({id: user.id, name: user.name, email: user.email});
           return res.status(201).json({token, message: "User Created"})})
      .catch(error => res.status(400).json(error));
  },
  login(req, res){
    let {email, password} = req.body;
    // Handle validation
    try {
        User.findOne({
            where: {email: email.toLowerCase()},
          }).then(user => {
              if(!user){
                  return res.status(404).json({"error": 'User with this email address not found'})
              }
            //   Compare password
            if(verifyPassword(password, user.password)){
                // Generate token
                const token = generateToken({id: user.id, name: user.name, email: user.email});
                console.log(token)
                return res.status(201).json({token});
            }else{
                return res.status(400).json({"error": "Invalid Password"})
            }
          })
    } catch (error) {
        return res.status(500).json({error})
    }
    

  }
};