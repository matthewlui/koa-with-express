const express = require('express');
const mounter = require('../');

const app = express();
const {expressRouter, koaApp} = mounter({mountPoint: '/koa'});

koaApp.use(async (ctx, next) => {
  ctx.toPrint = 'This line go first!';
  await next(ctx);
  console.log('This line go last which mean: Async work too!');
});

koaApp.use(async (ctx, next) => {
  console.log(ctx.toPrint);
  ctx.body = '<h1>Hello world</h1>';
});

app.use(expressRouter);
app.listen(8080);
