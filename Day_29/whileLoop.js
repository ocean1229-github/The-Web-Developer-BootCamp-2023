// let count = 0;
// while(count < 10){
//     count++;
//     console.log(count);
// }

//이런식으로도 한다
// while(!gameover){
//     //player 1 move
//     //player 2 move
// }

const SECRET = "BabyHippo";

let guess = prompt("enter the secret code...");
while(guess !== SECRET){
        guess = prompt("enter the secret code...");
}
console.log("CONGRATS YOU GOT THE SECRET!!!");


let input = prompt("Hey, say something!")
while(true){
    input = prompt(input);
    if(input.toLowerCase() === "stop copying me") break;
    
}
console.log("OK YOU WIN!")