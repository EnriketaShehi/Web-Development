let userWord = prompt('Enter a word: ');
let userWordLowerCase = userWord.toLowerCase();
let arrayWord = userWordLowerCase.split('');
let arrayLength = arrayWord.length;
let newArrayWord = new Array();

console.log('You have entered the word: ' + userWordLowerCase + '.');

let i = 0;

while (i <= arrayLength){
    newArrayWord.splice(i, 1, arrayWord[(arrayLength - i)]);
    i++;
}

let newWord = newArrayWord.join('');

console.log('Your word backwards is: ' + newWord + '.');

if (newWord == userWordLowerCase) {
    console.log('Your word "' + userWordLowerCase + '" is a palindrome.');
}
else {
    console.log('Your word "' + userWordLowerCase + '" is not a palindrome.'); 
}