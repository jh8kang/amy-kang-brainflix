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

// addCommaToString takes in a string and adds a comma to every 3rd index
function addCommaToString(string) {
    let commas = parseInt(string.length / 3)
    let array = string.split('').reverse();
    for(let i = 3; commas > 0; i+=4) {
        array.splice(i, 0, ',');
        commas -= 1;
    }
    let newArray = array.reverse().join('')
    if (newArray[0] == ',') {
        newArray = newArray.slice(1)
    }
    let newString = newArray
    return newString
}

app.post('/videos/:videoid/likes', (req, res)=> {
    videoList.forEach(video=> {
        if (video.id == req.params.videoid) {
         let likesArray = video.likes.split('')
         let newLikesArray = likesArray.filter(num=> num != ',')
         let likesString = newLikesArray.join('')
         let newLikes = (Number(likesString) + 1).toString();
         video.likes = addCommaToString(newLikes)
         console.log(addCommaToString('123456789101234567'))
         res.send(video)
        }
    })
})

app.post('/videos/:videoid/likes/delete', (req, res)=> {
    videoList.forEach(video=> {
        if (video.id == req.params.videoid) {
         let likesArray = video.likes.split('')
         let newLikesArray = likesArray.filter(num=> num != ',')
         let likesString = newLikesArray.join('')
         let newLikes = (Number(likesString) - 1).toString();
         video.likes = addCommaToString(newLikes)
         res.send(video)
        }
    })
})

app.post('/comments/:id', (req, res)=> {
    videoList.forEach(video => {
        if (video.id == req.body.videoid) {
            video.comments.push(req.body)
            res.json(req.body)
        }
    })
})

app.listen(8000, function(){
    console.log('listening on 8000')
})