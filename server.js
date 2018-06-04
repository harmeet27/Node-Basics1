const http = require('http');

function onequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Harmeet');
    res.end();
}

http.createServer(onequest).listen(8000);