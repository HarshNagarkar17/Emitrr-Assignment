const {userService} = require("./")
const {User} = require("../models")
const {CustomError} = require("../utils/customError")

/**
 * Creates a user
 * @param {Object} body
 * @returns {Promise<User>}
 */
const createUser = async(body) => {
    if(await (userService.findUserByEmail(body.email)))
        throw new CustomError("email already exist", 512);
    if(await (userService.findUserByUsername(body.username)))
        throw new CustomError("username already exist", 512);
    return User.create(body);
}

/**
 * login a user
 * @param {Object} body 
 * @returns {Object} 
 */
const getUser = async(body) => {
    const user = await userService.findUserByEmail(body.email);
    const check = await user?.matchPassword(body.password);
    if(!user || !check){
        throw new CustomError("Invalid Email or Password", 512);
    }
    return user;
}
module.exports = {createUser, getUser};