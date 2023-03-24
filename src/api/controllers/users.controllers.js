const User = require('../models/users.models');
const bcrypt = require ('bcrypt'); //requerimos bcrypt que es un metodo de encriptación
const {validateEmail, validatePassword, usedEmail} = require('../../utils/validators');
const { generateSign } = require('../../utils/jwt')


const login = async (req, res) => {
    try{
        // res.send("este es mi login");
        const userInfo = await User.findOne({email: req.body.email}) //vemos si existe el usuario
        if(!userInfo){
            return res.status(404).json({message: 'Invalid email address'})
        }
        if(!bcrypt.compareSync(req.body.password, userInfo.password)){//vemos si mi contraseña es correcta con compareSync
            return res.status(404).json({message: 'Invalid password'});
        }
        const token = generateSign(userInfo._id, userInfo.email);
        return res.status(200).json({userInfo, token});
            
    } catch (error) {
        return res.status(500).json(error)
    }
}

const register = async (req, res) => {
    try{
        const newUser = new User(req.body);
        if(!validateEmail(newUser.email)){
            return res.status(400).send({message: 'Invalid email address'});
        }
        if(!validatePassword(newUser.password)){
            return res.status(400).send({message: 'Invalid password'});
        }
        if(await usedEmail(newUser.email) > 0){
            return res.status(400).send({message: 'Email is already in use'});
        }
        newUser.password = bcrypt.hashSync(newUser.password, 10);// encriptamos el password con HashSync
        const createdUser = await newUser.save();
        return res.status(201).json(createdUser);
    }catch (error) {
        return res.status(500).json(error)
    }  
}

const logout = async (req, res) => {
    try{
        res.send ("este es mi logout");
    }catch (error) {
        return res.status(500).json(error)
    }   
}

const checkSession = async (req, res) => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteUser = await User.findByIdAndDelete();
        if(!deleteUser) {
            return res.status(404).json({ "message": "Usuario no encontrado" });
        }
        return res.status(200).json(deleteUser);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getUser = async (req, res) => {
    try {
        const allUsers = await User.find();  
        return res.status(200).json(allUsers); 
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {login, register, logout, checkSession, getUser, deleteUser};

