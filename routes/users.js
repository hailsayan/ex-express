const express = require('express');
const router = express.Router();

router.get('/register',(req,res)=>{
    res.send('register form');
});

router.post('/register',(req, res)=>{
    res.send(`your register was successfully`);
});

router.get('/:id/:age([0-9]{2})', (req, res)=>{
    res.send(`user with id ${req.params.id} and ${req.params.age} years old.`)
})


router.get('*', (req,res)=>{
    res.send('not found')
})
module.exports = router;