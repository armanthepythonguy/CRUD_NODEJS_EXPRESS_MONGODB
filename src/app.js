const express = require("express");
require("./db/connection");
const router = require("./routers/users");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(router);


app.listen(port, ()=> {
    console.log(`connection is live on ${port}`);
})