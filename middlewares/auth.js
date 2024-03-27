const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, secretKey);
        req.userData = decodedToken;
        next();
      } catch (err) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
}


function createSampleJWTToken(){
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({
        email: 'asdfasdf@asdf.com',
        userId: '1234'
    }, secretKey, { expiresIn: '1h' });

    console.log(token);
}

createSampleJWTToken();