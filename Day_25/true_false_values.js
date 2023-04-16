const userInput = prompt("Enter something");

if(userInput){
    console.log("TRUTHY!")
}else{
    console.log("FALSY!")
}

if(0){
    console.log("TRUTHY")
}else{
    console.log("Falsy")
}
//NaN, undefined -> falsy, 비어있지만 않으면 무조건 true