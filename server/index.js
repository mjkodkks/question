'use strict'

const https = require('https');
const cheerio = require('cheerio');

//  receive argument
const key = process.argv[2] ? process.argv[2] : console.log('please input the argument like "node index.js BEQSSF"'); 
if (key) {} else { return }

const options = { 
    hostname: 'codequiz.azurewebsites.net',
    path: '/',
    method: 'GET',
    headers: {'Cookie': 'hasCookie=true'}
};

https.get(options, (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    const $ = cheerio.load(data)
    const row = $('table td')
    const listAns = row.toArray().map(cell => cell.firstChild.data.trim())
    const ans = listAns[listAns.indexOf(key) + 1]
    console.log(ans) 
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});