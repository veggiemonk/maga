import m from 'mithril'
import app from './app/index.js'
import login from './app/login/index.js'
import dashboard from './app/dashboard/index.js'


m.route(document.body, '/', {
    "/": app,
    "/login": login,
    "/dashboard": dashboard,
});