
const bcrypt = require('bcrypt')

const shopeeModel = require('../model/shopee')
const catalogsModel = require('../model/catalogs')
const flashesModel = require('../model/flashes')
const mallsModel = require('../model/malls')
const topSearchModel = require('../model/top_search')
const suggestGoodModel = require('../model/suggest_goods')
const octoberGoodModel = require('../model/october_goods')
const catalogGoodModel = require('../model/catalog_goods')
const users = require('../model/users')


class HomeController {

    // Truyền data vào trang chủ
    home(req, res, next) {

        const listModel = [
            shopeeModel.find({}).lean(),
            catalogsModel.find({}).lean(),
            flashesModel.find({}).lean(),
            mallsModel.find({}).lean(),
            topSearchModel.find({}).lean(),
            suggestGoodModel.find({}).lean(),
            octoberGoodModel.find({}).lean(),
        ]

        Promise.all(listModel)
            .then((
                [
                    advertItems, 
                    catalogItems,
                    flashItems,
                    mallItems,
                    topSeachItems,
                    suggestGoodItems,
                    octoberGoodItems,
                   
                ]) => {
                res.render('home', {
                    advertItems,
                    catalogItems,
                    flashItems,
                    mallItems,
                    topSeachItems,
                    suggestGoodItems,
                    octoberGoodItems,
                    username: req.user ? req.user.username : '',
                })
            })
            .catch(next)
    }

    // [GET] /:slug
    product(req, res, next) {

        const listModel = [
                            suggestGoodModel.findOne({ slug: req.params.slug }).lean(),
                            octoberGoodModel.findOne({ slug: req.params.slug }).lean()
                        ]
       Promise.all(listModel)
            .then(([suggestProduct, octoberProduct]) =>
            res.render('detailProduct', { 
                layout: 'catalogLayout.hbs',
                suggestProduct,
                octoberProduct,
                username: req.user ? req.user.username : '',
             }))
            .catch(next)
    }


    // [GET] /create 
    create(req, res, next) {

        res.render('create', {layout: 'empty.hbs'})
       
    }
    // [POST] /create
    store(req, res, next) {
        const general = new octoberGoodModel(req.body);
        general.save()
            .then(() => res.redirect('create'))
            .catch(next)
    }

    // [GET] /sign-up 
    signup(req, res, next) {
        const response = {
            layout: 'signupin.hbs',
            title: 'Đăng ký',
            slug: 'sign-up',
        }
        res.render('sign', response)
    }

    // [POST] /sign-up
    signupPost(req, res, next) {
        
        users.exists({ email: req.body.email })
            .then(user => {
                if(user) {
                    res.render('sign', {
                        layout: 'signupin.hbs',
                        slug: 'sign-up',
                        title: 'Đăng ký',
                        error: 'Email is registered'
                    })
                }else {
                    users.exists({ username: req.body.username }, (err, user) => {
                        if(err) return next(err)
                        if(user) {
                            res.render('sign', {
                                layout: 'signupin.hbs',
                                slug: 'sign-up',
                                title: 'Đăng ký',
                                error: 'Username is already exist'
                            })
                        }else {
                            bcrypt.hash(req.body.password, 10, (err, hash) => {
                                if(err) return next(err)
                                const usersModel = new users({
                                    username: req.body.username,
                                    email: req.body.email,
                                    password: hash
                                }) 
        
                                usersModel.save()
                                    .then(() => res.redirect('/sign-in'))
                                    .catch(next)
                            })
                        }
                    })
                    
                }
            })
    }

    // [GET] /sign-in 
    signin(req, res, next) {
        const response = {
            layout: 'signupin.hbs',
            title: 'Đăng nhập',
            slug: 'sign-in',
            error: req.flash('error')
        }
        res.render('sign', response)
    }

    // [GET] /catalog
    catalog(req, res, next) {
        catalogGoodModel.find({})
            .lean()
            .then(catalogGoodItems => res.render('catalog', {
                layout: 'catalogLayout.hbs',
                catalogGoodItems,
                username: req.user ? req.user.username : '',
            }))
      
    }

    //logout
    logout(req, res, next) {
        req.logout()
        res.redirect('/')
    }
}

module.exports = new HomeController();