const path = require('path');
const fs = require('fs');
const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
const { stdout } = process;

let text = '';

stream.on('data', (chunk) => text += chunk);
stream.on('end', () => stdout.write(text));
stream.on('error', (err) => stdout.write(err.message));