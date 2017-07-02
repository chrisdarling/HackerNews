const express = require('express');
const api = express.Router();
const { getStories, getUser, getPost } = require('../helpers/index');
const { storyRoutes } = require('../constants');

api.post(storyRoutes, (req, res) => {
    const { skip, take, type } = req.body;
    getStories({ skip, take,  type }).then(response => {
        const { data, totalItems } = response;
        res.send({
            success: true,
            data,
            totalItems,
        })
    })
    .catch(err => {
        res.status(500).send({
            success: false,
        });
    }); 
});

api.get('/user/:name', (req, res) => {
    getUser(req.params.name).then(response => {
         res.send({
            success: true,
            data: response,
        })
    }).catch(err => {
        res.status(500).send({
            success: false,
        });
    })
});

api.get('/post/:id', (req, res) => {
    getPost(req.params.id).then(response => {
        res.send({
            success: true,
            data: response,
        })
    }).catch(err => {
        res.status(500).send({
            success: false,
        });
    })
});


module.exports = api;