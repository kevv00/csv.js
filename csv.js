const csvFilePath = 'bok1.csv'
const fs = reqiure('fs')
const csv = reqiure('csvtojson')
csv()
.fromFile(csvFilePath)
.then(jsonObj)={
fs.writeFile('filen.json', JSON.stringify(jsonObj), function (error) {})
})
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200,{'Content-Type' : 'text/html'})
  res.write(data);
  res.end();
}).listen(8080);
