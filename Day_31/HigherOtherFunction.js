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

