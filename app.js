const express = require ('express');
const homeRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', homeRouter);
app.use('/users', usersRouter);

app.listen(port, ()=>{
    console.log(`app is running on ${port}`);
})