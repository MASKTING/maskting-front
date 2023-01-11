const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
	app.use(createProxyMiddleware('/app', { target: 'http://localhost:8080/', ws: true }));
};
