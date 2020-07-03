const config = require('../config/config')

module.exports =  function AuthJwt(req, res, next) {
    try{
        const token = req.header('Authorization')
        if(!token) return res.status(401).send({message: 'No token'})
        if(token === config.token) {
            next()
        } else {
            return res.status(401).send({message: 'Invalid Token'})
        }
        
    } catch (e) {
        console.log(e)
    }
}