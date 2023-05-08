require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = {
  verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, mensagem: 'No token provided.' });
    
    jwt.verify(token, process.env.TOKEN_SECRET, function(err) {
      if (err) return res.status(500).json({ auth: false, mensagem: 'Failed to authenticate token.' });
      
      next();
    });
  }
}