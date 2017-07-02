const express = require('express');
const router = express.Router();
const { appRoutes } = require('../constants');
const ejs = require('ejs');

router.get(appRoutes, (req, res) => {
    res.render('index', { cache: true });
});

router.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;