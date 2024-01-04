const express = require ('express');
const homeRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();
const port = 3000;

// app.use('/', homeRouter);
// app.use('/users', usersRouter);

const myLogger = function (req, res, next){
    req.activeTime = (new Date()).toLocaleTimeString()
    next()
}

app.use(myLogger);

app.get('/', (req, res)=>{
    console.log('home sweet home')
    res.send(`home page - last seen recently: ${req.activeTime}`)
})

app.get('/about', (req, res)=>{
    console.log('about page')
    res.send(`about page - last seen recently: ${req.activeTime}`)
})

app.listen(port, ()=>{
    console.log(`app is running on ${port}`);
})