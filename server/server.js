const express = require('express')
let app = express();
let serv = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile('/microphone-scene.gltf')
})

app.use('/server', express.static('../index.html'))

serv.listen(2000)
console.log("Server started on port 2000")