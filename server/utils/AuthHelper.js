const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const hashPassword = password =>{
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
}

const verifyPassword = (password, hash) =>{
    const passwordCorrect =  bcrypt.compareSync(password, hash);
    console.log(passwordCorrect)
    return passwordCorrect
}

const generateToken = userData =>{
    return jwt.sign(userData, "secretKey", {
        expiresIn: '2d',
        issuer: "eventz api",
    })
}

module.exports = {
    hashPassword,
    verifyPassword,
    generateToken
}