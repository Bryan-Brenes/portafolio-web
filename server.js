const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + "/dist/web-showcase"));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/web-showcase/index.html'))
})

app.listen(process.env.PORT || 8080);