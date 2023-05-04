function rollDie(numSides){
    if(numSides === undefined){
        numSides = 6;
    }
    return Math.floor(Math*random() * numSides) + 1
}
// 원하는 값으로 주사위 굴리기가능
// 아무 값을 안넣었을 때는 6 나오게 하기.


function rollDie(numSides = 6){
    return Math.floor(Math*random() * numSides) + 1
}

// 위에 코드와 같은 내용

function greet(person, msg="Hey there", punc="!"){
    return console.log('${msg}, ${person}${punc}')
}