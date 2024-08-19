const crypto = require('crypto');


function findHashWithPrefix(prefix) // Function to find an input string that produces a hash starting with '00000'
{
    let input = 0;

    while (true) {

        let inputToStr = input.toString();

        let sha256hash = crypto.createHash('sha256').update(inputToStr).digest('hex');

        if (sha256hash.startsWith(prefix)) {

            return { input: inputToStr, hash: sha256hash };
        }
        input++;
    }
}

// Find and print the input string and hash
const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);