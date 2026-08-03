let max = prompt("enter the max number");

let random = Math.floor(Math.random() * max)+1;
console.log(`random number is ${random}`);

let guess = prompt(" guess the number : ");
while (true) {
  if (guess === "quit") {
    console.log("you quit");
    break;
  }

   if (guess == random) {
    console.log("you are right !");
    break;
  }

  else if(guess>random) {
    guess = prompt("your number is larger enter small number  ");
  }else{
    guess = prompt("your number is small enter a larger value ");
  }

}
