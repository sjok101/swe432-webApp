var express = require('express');
const mongoose = require('mongoose');
const Song = require('./models/song');

//express app
var app = express();
var path = require('path');

//connect mongodb, then listen to requests
const mongoURI ='mongodb+srv://bok:lK8drHQ5PMGJkIOg@clusterradio.grgdvff.mongodb.net/radiostation' ;
mongoose.connect(mongoURI)
    .then((result)=> app.listen(8080))
    .catch((err)=> console.log(err));



//sandbox routes
app.get('/add-song', (req,res) => {
    const song = new Song({
        name: 'test song',
        artist: 'test artist',
        duration: '3:00'
    });
    song.save()
        .then((result)=> {
            res.send(result)
        })
        .catch((err)=> {
            console.log(err)
        });
});

app.get('/all-songs', (req,res)=> {
    Song.find()
        .then((result)=> {
            res.send(result);
        })
        .catch((err)=> {
        console.log(err)
    });

});



//init view engine
app.set('view engine', 'ejs');

//set dir path
app.use(express.static(path.join(__dirname, 'public')));

//additional sandbox data
app.get('/', function(req, res){
    res.render('group3_bok', {data: {fExplore: ['Explore1','Explore2','Explore3'],
                                    fExclusive: ['Exclusive1','Exclusive2','Exclusive3', 'Exclusive4'],
                                    fInfo: ['Info1','Info2','Info3', 'Info4'],
                                    fServ: ['Service1','Service2'],
                                    fHeader: ['Explore','Exclusives','Information','Services'],
                                    fExtra: ['Help','Privacy Policy','Terms of Use','Mission']}});
});

