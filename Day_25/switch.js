const day = 2;
if(day === 1){
    console.log("MONDAY")
}else if(day===2){
    console.log("TUESDAY")
}else if(day===3){
    console.log("WEDNESDAY")
}else if(day===4){
    console.log("THURSDAYU")
}else if(day===5){
    console.log("FRIDAY")
}else{
    console.log("I DONT KNOW THAT!")
}

//스위치 버전

switch(day){
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("tuesday");
        break;        
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
    case 7:
        console.log("weekend");
        break;
    default:
        console.log("I DONT KNOW THAT");
        break
            
}