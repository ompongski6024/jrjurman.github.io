const choo = require('choo');
const html = require('choo/html');
const app = choo();

const layout = require('./components/layout');
const about = require('./pages/about');
const webapps = require('./pages/web-apps');
const projects = require('./pages/projects');
const resume = require('./pages/resume');

const renderState = require('./models/renderState');

app.model(renderState);

app.router([
  ['/', layout.bind(this, about)],
  ['about', layout.bind(this, about)],
  ['about/', layout.bind(this, about)],
  ['web-apps', layout.bind(this, webapps)],
  ['web-apps/', layout.bind(this, webapps)],
  ['projects', layout.bind(this, projects)],
  ['projects/', layout.bind(this, projects)],
  ['resume', layout.bind(this, resume)],
  ['resume/', layout.bind(this, resume)]
]);

module.exports = app;
