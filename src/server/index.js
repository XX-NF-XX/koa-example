const Koa = require('koa');
const helmet = require('koa-helmet'); // Secure your app by setting various HTTP headers
const cors = require('@koa/cors'); // CORS support
const morgan = require('koa-morgan'); // Log HTTP requests (Method, status, endpoint, serve time, etc...)
const bodyParser = require('koa-bodyparser'); // Parse JSON to ctx.request.body (from raw body of POST request)

const rootRouter = require('./routes'); // All our routes are here

const config = require('../config');

const app = new Koa();

app.use(helmet());
app.use(morgan('dev'));

const corsOptions = {
  origin: '*',
  allowMethods: 'GET,PUT,POST,DELETE,OPTIONS',
};
app.use(cors(corsOptions));
app.use(bodyParser());

// Error handling as simple as try/catch
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    if (err.expose) {
      ctx.body = { error: err.message };
    }

    ctx.app.emit('error', err, ctx);
  }
});

// Without any router
app.use(async (ctx, next) => {
  if (ctx.path === '/health' && ctx.method === 'GET') {
    ctx.body = 'Ok';
  }
  await next();
});

// Our routes
app.use(rootRouter.routes()).use(rootRouter.allowedMethods());

// Error logging
app.on('error', async err => {
  console.error('Something went wrong!', err);
});

function listen() {
  const server = app.listen(config.httpServer.port, config.httpServer.address, () => {
    console.log(`Server is listening at [${server.address().address}]:${server.address().port}`);
  });
}

module.exports = {
  listen,
};
