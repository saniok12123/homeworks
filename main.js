const x = +prompt("введіть число");
if (x % 3 === 0 && x % 5 === 0) {
    console.log ('FizzBuzz');
} else if (x % 5 === 0) {
    console.log ('Buzz');
} else if (x % 3 === 0){
    console.log ('Fizz');
} else {
    console.log("is not divisible by 3 and is not divisible by 5")
}