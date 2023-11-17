const express = require('express');
const { body } = require('express-validator');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', 
    [  
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email')
            .normalizeEmail()
            .trim()
            .custom((value) => {
                User.findOne({ email: value })
                .then(user => {
                    if (!user) {
                        return Promise.reject('No user exists with that email.').catch(err => console.log(err))
                    }
                })
            }),
        body('password', 'Please enter an email that is at least 5 characters and has only text and numbers')
            .isLength({min: 5})
            .isAlphanumeric(),
    ],
    authController.postLogin);

router.post('/signup', 
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email.')
            .custom((value, {req}) => {
                return User.findOne({ email: value })
                    .then(userDoc => {
                    if (userDoc) {
                        return Promise.reject('E-Mail exists already, please pick a different one.').catch(err => console.log(err))
                    }})
            })
            .normalizeEmail(),
        body(
                'password', 
                'Please enter a password with only numbers and text and at least 5 characters'
            )
            .isLength({min: 5})
            .isAlphanumeric()
            .trim(),
        body('confirmPassword')
            .custom((value, {req}) => {
                if (value !== req.body.password) {
                    throw new Error('Password and Confirm Password does not match.')
                }
                return true
            })
    ],
    authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;