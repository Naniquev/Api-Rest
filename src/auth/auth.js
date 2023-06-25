const passport = require ('passport')
const PassportStrategy = require ('../auth/passport-config')

function initializeAuthentication(){
    passport.use(PassportStrategy)
}

module.exports = {initializeAuthentication}