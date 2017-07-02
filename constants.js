const HN_URL = 'https://hacker-news.firebaseio.com/v0/';
const ITEM_URL = 'https://hacker-news.firebaseio.com/v0/item/';
const POST_URL = 'http://api.hackerwebapp.com/item/';
const USER_URL = 'https://hacker-news.firebaseio.com/v0/user/';
const typeLookup = {
    'top': 'topstories.json',
    'show': 'showstories.json',
    'ask': 'askstories.json',
    'job': 'jobstories.json',
    'new': 'newstories.json',
};
const storyRoutes = ['/top', '/news', '/ask', '/job', '/show'];
const appRoutes = ['/', '/ask', '/show', '/job', '/top', '/post/:id', '/user/:name'];

module.exports = {
    HN_URL,
    ITEM_URL,
    POST_URL,
    USER_URL,
    typeLookup,
    storyRoutes,
    appRoutes,
};