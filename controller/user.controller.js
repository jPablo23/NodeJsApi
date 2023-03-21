const UserService = require('../services/user.service');

exports.register = async(req,res,next)=>{
    try {
        const {email,password} = req.body;
        const succesRes = await UserService.registerUser(email,password);

        res.json({status:true, success:"Usuario Registrado"});
    } catch (err) {
        throw err;
    }
}