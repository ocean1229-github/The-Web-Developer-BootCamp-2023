true && true;
//true

true && false;
// false

1 === 1 && 1< 7;
//true

const password = prompt("Enter your password");
if(password.length >= 6 && password.indexOf(' ' === -1)){
    console.log("VALID PASSWORD!")
}else{
    console.log("INCORRECT FORMAT FOR PASSWORD!")
}

