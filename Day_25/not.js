!null

!(0 === 0)

!(3 <= 4)
//false

const firstName = prompt("enter your first name");
if(!firstName){
    const firstName = prompt("TRY AGAIN!!!");
}


const age = 8;
if(!( age>=0 && age<5 || age >= 65)){
    console.log("YOUR NOT A BABY OR A SENIOR");