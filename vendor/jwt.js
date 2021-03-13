const jwt = require('jsonwebtoken')
export function  createJwt(user, secretSignature, tokenLife= 3600){
    return new Promise((resolve,reject)=>{
        
        jwt.sign(
            {data: user},
            secretSignature,
            {
                algorithm:'HS256',
                expiresIn:tokenLife
            },(error,token)=>{
                if(error) return reject(error)
                return resolve(token)
            }
        )
    })
}
export function verifyToken (token,secretSignature){
    return new Promise((resolve,reject)=>{
        jwt.decode(token,secretSignature,(err,decoded)=>{
            if(err) return reject(err)
            return resolve(decoded) 
        }) 
    })
}