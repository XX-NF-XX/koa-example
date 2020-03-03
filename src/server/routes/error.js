const Router = require('@koa/router');

const router = new Router();

// Throw a regular error inside a regular function (middleware)
router.get('/throw', () => {
  throw new Error('Threw an error!');
});

// Throw an async error (reject the promise)
router.get('/throw-async', async () => {
  throw new Error('Threw an async error!');
});

// Throw 400 with ctx.throw (message should be exposed)
router.get('/throw-ctx-400', async ctx => {
  ctx.throw(400, 'Threw 400 with ctx.throw');
});

// Throw 501 with ctx.throw (errors with code >= 500 are not exposed)
router.get('/throw-ctx-501', async ctx => {
  ctx.throw(501, 'Threw 501 with ctx.throw');
});

// Throw 501 with ctx.throw exposing the message
router.get('/throw-ctx-501-expose', async ctx => {
  ctx.throw(501, 'Threw 501 with ctx.throw exposing the message', { expose: true });
});

// Throw with ctx.assert (expose is set to true by default)
router.get('/assert-ctx', async ctx => {
  ctx.assert(false, 400, 'Threw using ctx.assert');

  // Same as
  // if (false) {
  //   ctx.throw(400, 'Threw an error')
  // }
});

module.exports = router;
