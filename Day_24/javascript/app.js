console.log("HELLO FROM OUR FIRST JS FILE!!!");



console.log("BEFORE CONDITIONAL")
let random = Math.random();
if(random < 0.5){
    console.log("YOUR NUMBER IS LESS THAN 0.5");
    console.log(random);
}

if(random > 0.5){
    console.log("YOUR NUMBER IS Greater THAN 0.5");
    console.log(random);
}
console.log("AFTER CONDITIONAL")


const dayOfWeek = prompt('Enter a day').toLowerCase();

if(dayOfWeek === 'monday'){
    console.log("UGHHH I HATE MONDAYS!");
} else if(dayOfWeek === 'saturday'){
    console.log("Yay I Love Saturdays!");
} else if(dayOfWeek === 'friday'){
    console.log("Friday is good");
}else{
    console.log("tired..");
}

const age = 8;

if(age < 5){
    console.log("U are a baby. U get in for free!");
} else if(age < 10){
    console.log("U are a Child. You pay $10")
} else if(age < 65){
    console.log("U are a adult. You pay $20")
} else{
    console.log("U are a Senior. You pay $10")
}