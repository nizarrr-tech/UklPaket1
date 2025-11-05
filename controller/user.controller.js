let { userList } = require("../database")

function getAllUser(request, response) {
    return response.json({
        success: true,
        message: "All User have been loaded",
        data: userList
    })
}

function getUser(request, response) {
    let userID = Number(request.params.id) 
    let userData = userList.find(u => u.id === userID);

    return response.json({
        success: true,
        message: "User has been loaded",
        data: userData
    })
}

function addUser(request, response) {
    let newData = {
        id: userList.length + 1,
        name: request.body.name,
        username: request.body.username,
        password: request.body.password,
        role: request.body.role,
    }

    userList.push(newData)

    return response.json({
        status: "success",
        message: "User has been added",
        data: newData
    })
}

function updateUser(request, response) {
    let userID = Number(request.params.id)
    let newData = {
        id: userID,
        name: request.body.name,
        username: request.body.username,
        password: request.body.password,
        role: request.body.role,
    }
    
    Object.assign(userList[userID - 1], newData)

    return response.json({
        status: "success",
        message: "User has been updated",
        data: userList[userID - 1]
    })
}

module.exports = { userList, getAllUser, getUser, addUser, updateUser }