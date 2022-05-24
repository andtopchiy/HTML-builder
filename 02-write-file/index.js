const path = require('path');
const fs = require('fs');
const { stdin, stdout } = process;
const stream = fs.createWriteStream(path.join(__dirname, 'text.txt'), 'utf-8');

stdout.write('What you want yo write?\n');
stdin.on('data', data => {
    if (data.toString().trim() === 'exit') process.exit();
    stream.write(data);
});
process.on('exit', () => {
    stdout.write('\nGood bye!\n');
});
process.on('SIGINT', () => process.exit());