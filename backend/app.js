const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    ctx.body = "バックエンドだよ"
})

app.listen(3000);
