const express = require('express')
const passport = require('passport')
const router = express.Router() 

const homeController = require('../../app/controllers/HomeController')

function isLogin(req, res, next) {
    if(!req.isAuthenticated()) return next()
    res.redirect('/') 
}

router.get('/log-out', homeController.logout)
router.get('/sign-up', homeController.signup)
router.post('/sign-up', homeController.signupPost)
router.get('/sign-in', isLogin, homeController.signin)
router.post('/sign-in', 
passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/sign-in',
    failureFlash: true
}))
router.get('/catalog', homeController.catalog)
router.get('/create', homeController.create)
router.post('/store', homeController.store)
router.get('/:slug', homeController.product)
router.get('/', homeController.home)

module.exports = router