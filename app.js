const express = require ('express');
const homeRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.static('files'));


app.use('/static', express.static('public'));
app.use('/images', express.static('images'));


app.use('/', homeRouter);
app.use('/users', usersRouter);

app.listen(port, ()=>{
    console.log(`app is running on ${port}`);
})