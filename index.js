const express = require('express');
const app = express();
const port = 8080;


var play11 = require('./Playing11.json');
var subs = require('./Substitutes.json');

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
});

app.get('/PG', function (req, res) {
    res.json(play11);
})

app.use(express.urlencoded({
    extended: true
}));

app.post('/PP',function(req,res){
    // var body =req.body;
    // console.log(req.body.PG);
    // res.send(req.body.PG)
    if(req.body.Name && req.body.Role && req.body.Age)
    {
        play11.push(req.body)
        res.json(play11)
    }
    else
    {
        console.log('please insert values!')
    }
});

app.get('/SG', function (req, res) {
    res.json(subs);
})

app.post('/SP',function(req,res){
    // var body =req.body;
    // console.log(req.body.PG);
    // res.send(req.body.PG)
    if(req.body.Name && req.body.Role && req.body.Age)
    {
        subs.push(req.body)
        res.json(subs)
    }
    else
    {
        console.log('please insert values!')
    }
});