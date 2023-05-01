try{
    hello.toUpperCase();
} catch(e){
    console.log("ERROR!!!")
}

console.log("AFTER!");
// 이럴경우 ERROR!!!
// AFTER!! 가 뜬다 잘 실행이 된다는 뜻임.


function yell(msg){
    try{
        console.log(msg.toUpperCase4().repeat(3));
    } catch(e){
        console.log(e);
        console.log("Please pass a string next time!");
    }
}