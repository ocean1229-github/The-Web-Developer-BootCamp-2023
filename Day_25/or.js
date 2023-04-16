1 !== 1 || 10 > 5;
// true





const age = prompt("enter your age");

if( age>=0 && age<5 || age >= 65){
    console.log("FREE");
}else if(age>=0 && age <10){
    console.log("$10");
}else if(age>=0 && age <65){
    console.log("$20");
}else{
    console.log("INVALID AGE!")
}