const fs = require('fs');
const Router = require('@koa/router');

const status = require('./status');
const env = require('./env');
const error = require('./error');
const post = require('./post');

const router = new Router();

// Show list of endpoints (serve static JSON file)
router.get('/', async (ctx, next) => {
  ctx.body = fs.createReadStream('./static/endpoints.json', { encoding: 'utf8' });
  ctx.type = 'application/json; charset=utf-8';
  await next();
});

// Show system status (uptime and/or freemem)
router.use('/post', post.routes());

// Show system status (uptime and/or freemem)
router.use('/status', status.routes());

// Show env (full list or single variable)
router.use('/env', env.routes());

// Throw different types of errors
router.use('/error', error.routes());

module.exports = router;
