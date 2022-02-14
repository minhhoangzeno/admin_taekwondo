const jwt = require('jsonwebtoken');
module.exports = {
    verifyJwtToken: (token, secretKey) => {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return err;
            }
            else {
                return decoded;
            }
        });
    }
};
//# sourceMappingURL=verifyJwtToken.js.map