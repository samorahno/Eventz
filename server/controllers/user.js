const {hashPassword, verifyPassword, generateToken} = require('../utils/AuthHelper')

module.exports = {
  register(req, res) {
    const {name, email, password} = req.body;
    const id = email
    client.hmset(id, [
        'name', name, 
        'email', email, 
        'password', hashPassword(password), 
      ], (err, reply)=>{
        if(err){
            return res.json(500).json({err})
        }
        const token = generateToken({id: user.id, name: user.name, email: user.email});
        return res.status(201).json({token, message: "User Created"})
    });
  },
  login(req, res){
    let {email, password} = req.body;
    client.hgetall(email, (err, user)=>{
        if(!user){
            return res.status(404).json({'error': 'User does not exist'});
        }else{
          if(verifyPassword(password, user.password)){
              // Generate token
              const token = generateToken({id: user.id, name: user.name, email: user.email});
              return res.status(200).json({token, message: "Ok"});
          }else{
              return res.status(400).json({"error": "Invalid Password"})
          }
        }
    })
  }
};