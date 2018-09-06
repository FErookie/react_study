const koa = require("koa");
const router = require("koa-router");

const app = new koa();

app.listen(3000 , function () {
    console.log("this server has running in 3000 port");
});
