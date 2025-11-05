const jwt = require("jsonwebtoken")

const { userList } = require("./user.controller")

const secret = `mokleters`

function authenticate(request, response) {
    let dataLogin = {
        username: request.body.username,
        password: request.body.password
    }

    let dataUser = userList.find(u => u.username === dataLogin.username && u.password === dataLogin.password )

    if(dataUser) {
        let payload = JSON.stringify(dataUser)
        console.log(payload)

        let token = jwt.sign(payload, secret)

        return response.json({
            success: true,
            logged: true,
            message: `Authentication Success`,
            token: token,
            data: dataUser
        })
    }

    return response.json({
        success: false,
        logged: false,
        message: `Authentication Failed. Invalid username or password`
    })
}

function authorize(request, response, next) {
    const authHeader = request.headers.authorization;

    if(authHeader) {
        const token = authHeader.split(' ')[1]

        let verifiedUser = jwt.verify(token, secret);
        if(!verifiedUser) {
            return response.json({
                success: false,
                auth: false,
                message: `User Unauthorized`
            })
        }
        request.user = verifiedUser
        next();
    } else {
        return response.json({
            success: false,
            auth: false,
            message: `User Unauthorized`
        })
    }
}

module.exports = { authenticate, authorize }