function callTwice(func){
    func();
    func();
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log();
}

callTwice(rollDie)
//callTwice라는 함수에 rollDie라는 함수를 전달
//callTwice(rollDie())를 할 경우 rollDie()함수 호출 후 값을 찾은 뒤 그 값을 넣어버려서 이렇게 넣으면 안됨.

function callTenTimes(f){
    for(let i = 0; i<10; i++){
        f();
    }
}

const mystery = function makeMysteryFunc(){
    const rand = Math.random()
    if(rand > 0.5){
        return function(){
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN~")
        }
     } else {
            return function(){
                alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIURS");
                alert("STOP TRYING TO CLOSE THIS WINDOW!");
                alert("STOP TRYING TO CLOSE THIS WINDOW!");
                alert("STOP TRYING TO CLOSE THIS WINDOW!");
                alert("STOP TRYING TO CLOSE THIS WINDOW!");
                alert("STOP TRYING TO CLOSE THIS WINDOW!");
                alert("STOP TRYING TO CLOSE THIS WINDOW!");
            }
        }
}

//mystery만 누르면 이 코드가 실행된다.


function makeBetweenFunc(min, max){
    return function(num){
        return num >= min && num <= max;
    }
}
const testRange = function(num){
    return num >= 100 && num <= 200
}

// makeBetweenFunc(50, 100) =>

function isBetween(num){
    return num >= 50 && num <= 100;
}
function isBetween2(num){
    return num >= 1 && num <= 10;
}

//factory function 

//--------------------------------------------------------
//const isChild = makeBetweenFunc(0, 18)
//이렇게하면 isChild라는 함수에 저 조건함수가 들어간다 이후
//isChild(40)
//false
//가 뜨는 식이다 

const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);
//isSenior(40)
//false
//isSenior(90)
//true