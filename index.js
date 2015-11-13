import m from 'mithril'
import app from './app/index'
import login from './app/login/index'
import dashboard from './app/dashboard/index'

m.route(document.body, '/', {
  '/': app,
  '/login': login,
  '/dashboard': dashboard,
})
