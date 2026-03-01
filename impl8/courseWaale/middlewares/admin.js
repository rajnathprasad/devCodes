const jwt = require("jsonwebtoken")
const {JWT_ADMIN_SECRET} = require("../config");
const {adminModel} = require("../db")
async function adminAuthMiddleware(req, res, next){
    try{
        const token = req.headers.token;
        if(!token){
            return res.json({
                message : "missing token"
            })
        }
        const decoded = jwt.verify(token,JWT_ADMIN_SECRET);
        const admin = await adminModel.findById(decoded.id);
        if(admin){
            req.adminId = decoded.id;
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

module.exports = {adminAuthMiddleware};