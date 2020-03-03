const Router = require('@koa/router');

const router = new Router();

// Return body as response
router.post('/', async ctx => {
  ctx.body = { requestBody: ctx.request.body };
});

module.exports = router;
