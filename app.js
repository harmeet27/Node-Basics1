const http = require('http');
const mymodule = require('./mymodule.js');
const mymodule2 = require('./myModule2.js')

function onequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(mymodule2.myVariable);
    mymodule2.myFunction();

    res.end();
}

http.createServer(onequest).listen(8000);