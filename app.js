alert('Welcome to the Secret Number Game');
let secretNumber = 29;
console.log('Secret Number = ' + secretNumber)

let kick = prompt('Choose a number between 1 and 30');

if (secretNumber == kick) {
    console.log('Thats right! you discovered the secret number ' + secretNumber);
} else {
    console.log('You missed :(');
}