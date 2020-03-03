# [Koa](https://koajs.com) app example ([Node.js](https://nodejs.org))

## How to use:
- clone this repo

  `git clone https://github.com/XX-NF-XX/koa-example.git`
- install dependencies

  `npm i`
- run

  `npm start`
- open via browser or any other tool like curl or Postman

  http://localhost:3000
  
## List of endpoints:
- `/` - List of available endpoints
- `/health` - Example of simple middleware usage (without router)
- `/post` - Receive POST body, parse it and return
- `/status` - Uptime and freemem
- `/status/uptime` - Uptime only
- `/status/freemem` - Freemem only
- `/env` - List of all env variables (Might be a long list!)
- `/env/:VAR_NAME` - show a single env variable (try `/env/HOME` or `/env/PWD` or `/env/AAA`)
- `/error/throw` - Throw a regular error inside a regular function (middleware)
- `/error/throw-async` - Throw an async error (reject the promise)
- `/error/throw-ctx-400` - Throw 400 with ctx.throw (message should be exposed)
- `/error/throw-ctx-501` - Throw 501 with ctx.throw (errors with code >= 500 are not exposed)
- `/error/throw-ctx-501-expose` - Throw 501 with ctx.throw exposing the message
- `/error/assert-ctx` - Throw with ctx.assert (expose is set to true by default)