# koa-with-express

> Simple lib to pipe up express and koa world, thus, no more arguments la

###How you use:
```js
const express = require('express');
const mounter = require('../'); // For your project should be this module name

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
```


### What you can see in command line:
```
This line go first!
This line go last which mean: Async work too!
```