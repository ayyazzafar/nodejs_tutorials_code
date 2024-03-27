const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
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
    }, process.env.SECRET_KEY, { expiresIn: '1h' });

    console.log(token);
}

createSampleJWTToken();