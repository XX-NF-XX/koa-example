const Router = require('@koa/router');

const env = require('../../services/local/env');

const router = new Router();

// Send value of env variable. /env/:ENV_VARIABLE like /env/HOME or /env/PWD or /env/AAA
router.get('/:env', async ctx => {
  const name = ctx.params.env;
  const value = env.getEnv(name);

  if (value == null) {
    ctx.status = 404;
    ctx.body = { error: `Env variable '${name}' is not defined` };
  }

  ctx.body = { [name]: value };
});

// Send list of all env variables (it might be a lot of data)
router.get('/', async ctx => {
  ctx.body = env.getEnv();
});

module.exports = router;
