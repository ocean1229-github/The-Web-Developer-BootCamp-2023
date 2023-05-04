function sum(){
    console.log(arguments)
}

//배열과 비슷하지만 배열이아니다.
//sum(3,4,5) 할경우를 말함


//이걸 하려면 인수를 반복시키고 한데 모아야함.

// function sum(){
//     return arguments.reduce((total, el) => total + el)
// }

function sum(...nums){ //...nums를 매개변수
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...everyoneElse){
    console.log('COLD MEDAL COES TO: ${gold}')
    console.log('SILVER MEDAL COES TO: ${silver}')
    console.log('AND THANKS TO EVERYONE ELSE: ${everyoneElse}')
    // raceResults('Tammy', 'Todd', 'Tina', 'Treven')
    // 작동 잘됨.
}