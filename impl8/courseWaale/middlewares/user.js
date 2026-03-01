const jwt = require("jsonwebtoken")
const {JWT_USER_SECRET} = require("../config");
const {userModel} = require("../db")
async function userAuthMiddleware(req, res, next){
    try{
        const token = req.headers.token;
        if(!token){
            return res.json({
                message : "missing token"
            })
        }
        const decoded = jwt.verify(token,JWT_USER_SECRET);
        const user = await userModel.findById(decoded.id);
        if(user){
            req.userId = decoded.id;
            next();
        }
        else{
            return res.json({
                message : "Invalid or expired token"
            })
        }
        
    }catch(err){
        res.json({
            error : err
        })
    }
}

module.exports = {userAuthMiddleware};