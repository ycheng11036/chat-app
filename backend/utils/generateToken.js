import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d' // Token will expire in 30 days
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // Cookie will expire in 15 days
        httpOnly: true, // Cookie is not accessible via JavaScript, prevent cross site scripting (XSS) attacks
        sameSite: 'strict', // Cookie is only sent in a first-party context, prevent cross site request forgery (CSRF) attacks
        secure: process.env.NODE_ENV != 'development' // Cookie is only sent over HTTPS in production
    });
};

export default generateTokenAndSetCookie;
