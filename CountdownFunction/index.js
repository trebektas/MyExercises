let counter = 15
const startCountdown = () => {
const textCountdown = `Last ${counter} seconds for the question!`
    if (counter === 0) {
        clearInterval(myInterval);
        return console.log(`Time's up!`);
    }
    counter--;
return console.log(textCountdown)
}

const myInterval = setInterval(startCountdown,1000);