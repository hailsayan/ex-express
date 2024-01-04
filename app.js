const express = require ('express');
const homeRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();
const port = 3000;

app.use('/', homeRouter);
app.use('/users', usersRouter);

app.listen(port, ()=>{
    console.log(`app is running on ${port}`);
})