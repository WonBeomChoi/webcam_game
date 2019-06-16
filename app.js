const Bundler = require('parcel-bundler')
const app = require('express')()
const path = require('path')

const isProd = process.env.NODE_ENV === 'develop'
const file = 'index.html'
const options = {
    outDir: path.join(__dirname, '..', 'dist'),
    // index.html을 불러오는 경우, publicUrl을 /로 설정해주어야 정상적으로 import가 가능했습니다.
    publicUrl: '/',
    production: false,
    detailReport: true,
    cache: true,
    minify: true,
    sourceMaps: true,
    http: true
}

const bundler = new Bundler(file, options)

app.use(bundler.middleware())

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});