//find some of nubers between 1-10
function getRandomNumbers(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 10) + 1);
    }
    return numbers;
}
console.log(getRandomNumbers(5));