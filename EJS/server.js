var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('group3_bok', {data: {fExplore: ['Explore1','Explore2','Explore3'],
                                    fExclusive: ['Exclusive1','Exclusive2','Exclusive3', 'Exclusive4'],
                                    fInfo: ['Info1','Info2','Info3', 'Info4'],
                                    fServ: ['Service1','Service2'],
                                    fHeader: ['Explore','Exclusives','Information','Services'],
                                    fExtra: ['Help','Privacy Policy','Terms of Use','Mission']}});
});

app.listen(8080);