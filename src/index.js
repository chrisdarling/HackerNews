import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Post from './components/Post';
import User from './components/User';
import PostList from './components/PostList';
import NavBar from './components/NavBar';
import thunk from 'redux-thunk';

import reducers from './reducers';
import './spectre.min.css';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleWare(reducers)}>
    <BrowserRouter>
        <div className="App">
            <NavBar />
            <div>
                <Switch>
                    <Route path="/user/:name" component={User}/>
                    <Route path="/post/:id" component={Post} />
                    <Route path="/top" component={PostList} />
                    <Route path="/show" component={PostList} />
                    <Route path="/ask" component={PostList} />
                    <Route path="/job" component={PostList} />
                    <Route path="/" component={PostList} />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();