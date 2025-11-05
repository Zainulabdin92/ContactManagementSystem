import express from 'express'
import { Register, Login,Auth } from '../controller/userController.js'
import { body } from 'express-validator'
import { VerifyUser } from '../middlewire/VerifyUser.js'
import { createContact, getContact, getContacts,updateContact,deleteContact } from '../controller/contactController.js'
// import { verify } from 'jsonwebtoken'


const router = express.Router()

router.post('/register',[
    body('name').trim().notEmpty().withMessage('Name Should Not be Empty'),
    body('email').trim().notEmpty().withMessage('Email Must Not be Empty')
    .isEmail().withMessage('Invalid Email !!!'),
    body('password').trim().notEmpty().withMessage('Password Should not be empty')
    .isLength({min:5, max:30}).withMessage('password length be 5-30')
],Register)

router.post('/login',[
    body('email').trim().notEmpty().withMessage('Email Must Not be Empty')
    .isEmail().withMessage('Invalid Email !!!'),
    body('password').trim().notEmpty().withMessage('Password Should not be empty')
    .isLength({min:5, max:30}).withMessage('password length be 5-30')
],Login )

router.get('/verify',VerifyUser, Auth)


router.post('/add-contact',VerifyUser,createContact)

router.get('/contacts',VerifyUser,getContacts)

router.get('/contact/:id',VerifyUser,getContact)

router.put('/update-contact/:id',VerifyUser,updateContact)

router.delete('/contact/:id',VerifyUser,deleteContact)

export {router as Router}