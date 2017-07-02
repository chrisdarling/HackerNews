const fetch = require('axios');
const { HN_URL, ITEM_URL, POST_URL, USER_URL, typeLookup } = require('../constants');

const getStories = ({ skip, take, type }) => {
    return new Promise((resolve, reject) =>{
        const story = typeLookup[type];
        fetch.get(`${HN_URL}${story}`)
            .then((response) => {
                if (!response || !response.data) {
                    reject('request error');
                }
                const totalItems = response.data.length;
                const startIndex = skip;
                const endIndex = skip + take;
                const data = response.data.slice(startIndex, endIndex);
                const promises = data.map(item => {
                    return fetch.get(`${ITEM_URL}${item}.json`);
                })
                return Promise.all(promises.concat(totalItems));
            })
            .then(response => {
                if (!response) {
                    reject('request error');
                }
                const totalItems = response.pop();
                const data = response.map(item => item.data);
                resolve({
                    data,
                    totalItems,
                });
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });
}

const getUser = (user) => {
    return new Promise((resolve, reject) => {
        fetch.get(`${USER_URL}${user}.json`).then(response => {
            if (!response || !response.data) {
                reject('user not found');
            }
            resolve(response.data);
        }).catch(err =>{
            reject(err);
        }); 
    });
}

const getPost = (id) => {
    return new Promise((resolve, reject) => {
        fetch.get(`${POST_URL}${id}`).then(response => {
            if (!response || !response.data) {
                reject('post not found');
            }
            resolve(response.data);
        }).catch(err => {
            reject(err);
        })
    });
}

module.exports = {
    getStories,
    getPost,
    getUser,
};