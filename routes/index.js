const express = require ('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.render('home')
});

router.get('/about', (req, res)=>{
    res.send('about us god damn you');
});

router.get('*', (req,res)=>{
    res.send('not found')
})

module.exports = router;