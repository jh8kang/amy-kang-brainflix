const express = require('express');
const app = express();
const cors = require('cors');
const videoList = require('./videos.json')
const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));
app.use(cors())

app.get('/videos', (req, res)=> {
    res.json(videoList)
})

app.get('/videos/:id', (req, res)=> {
    let mainVideo = videoList.find(item=>item.id == req.params.id)
    res.json(mainVideo)

})

app.post('/videos', (req, res) => {
    videoList.push(req.body)
    res.send(req.body)
})

app.listen(8000, function(){
    console.log('listening on 8000')
})