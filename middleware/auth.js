// Validate user token.

/*
This middleware is called by protected routes.
The route passes in the request object which contains the user.

*/

const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Get token from header at x-auth-token key
  const token = req.header('x-auth-token');

  if (!token) {
    // Return error if no token exists.
    return res.status(401).json({
      msg: 'No token, authorization denied'
    });
  }

  try {
    // Token exists. Try to verify it.
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // Assign decoded user object to the request object
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({
      // Token is invalid
      msg: 'Token is not valid'
    });
  }
};
