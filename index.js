// Create a koa app
module.exports = function expressWithKoa({mountPoint, koaApp}) {
  const expressRouter = require('express').Router();
  let app = koaApp;
  if (app === undefined) {
    const koa = require('koa');
    app = new koa;
  }
  const koaCallback = app.callback();
  expressRouter.use(mountPoint, (req, res, next) => {
    koaCallback(req, res).then((ctx, kNext) => {
      next(ctx.req, ctx.res);
    });
  });
  return {
    expressRouter,
    koaApp: app,
  }
};