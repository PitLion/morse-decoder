const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let word = expr;
  let size = 10;
  let subArr = [];
  let secretWord = '';

  for (let i = 0; i < word.length/size; i++) {
    subArr[i] = word.slice((i * size), (i * size) + size);
  }

  for (let j = 0; j < subArr.length; j++) {
     for (key in MORSE_TABLE) {
       let arr = key.split('');
       let newArr = arr.map(item => (item === '.') ? 10 : 11);

       let str = newArr.join('');
       let myStr = '';
       if (str.length < 10) {
         myStr = '0'.repeat(10 - str.length) + str;
       } else {
         myStr = str;
       }

       if (subArr[j] === myStr) {
         secretWord = secretWord + MORSE_TABLE[key]
       } else if (subArr[j] === '**********') {
         secretWord = secretWord + ' ';
         break;
       }
     }
  }
  return secretWord;
}

module.exports = {
    decode
}
