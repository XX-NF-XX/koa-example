const Router = require('@koa/router');

const { status } = require('../../services/local/os');

const router = new Router();

// uptime middleware (store uptime to ctx.state)
async function uptime(ctx, next) {
  ctx.state.uptime = status.getUptimeMessage();
  return next(); // call next middleware
}

// freemem middleware (store freemem to ctx.state)
async function freemem(ctx, next) {
  ctx.state.freemem = status.getFreeMemMessage();
  return next(); // call next middleware
}

// response middleware (send ctx.state as response)
async function sendStatus(ctx) {
  ctx.body = ctx.state;
}

// get freemem and uptime
router.get('/', freemem, uptime, sendStatus);

// get uptime only
router.get('/uptime', uptime, sendStatus);

// get freemem only
router.get('/freemem', freemem, sendStatus);

module.exports = router;
