const Bundler = require('parcel-bundler')
const express = require('express')
const app = express();
const engines = require('consolidate');
const path = require('path')
const fs = require('fs');
const isProd = process.env.NODE_ENV === 'develop'
// const file = 'game.html'
// const options = {
//     outDir: path.join(__dirname, '..', 'dist'),
//     publicUrl: '/game',
//     production: false,
//     detailReport: true,
//     cache: true,
//     minify: true,
//     sourceMaps: true,
//     http: true
// }

// const bundler = new Bundler(file, options)
// app.use(bundler.middleware());

app.set('views', __dirname);

app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/game',(req,res)=>{
    res.render('gamemain');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});