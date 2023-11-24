alert('Welcome to the Secret Number Game');
let numberMax = 100;
let secretNumber = parseInt(Math.random() * numberMax + 1);
console.log('Secret Number = ' + secretNumber);

let kick, attempts = 1;

while (kick != secretNumber) {

    kick = prompt(`Choose a number between 1 and ${numberMax}`);

    if (secretNumber == kick) {
        break;
    } else {

        alert('You missed :(');
        if (kick > secretNumber) {
            alert('The secret number is smaller than the ' + kick);
        } else {
            alert('The secret number is greater than the ' + kick);
        }
        attempts++;

    }

}

let wordAttempt = attempts > 1 ? 'attempts' : 'attempt'
alert(`Thats right! you discovered the secret number ${secretNumber} with ${attempts} ${wordAttempt}.`)


