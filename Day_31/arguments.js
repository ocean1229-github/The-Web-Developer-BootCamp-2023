function gree(idiotPerson){
    a.toUpperCase() ;
    console.log('Hey there, ${firstName}!')
}

function greet(firstName, lastName){
    console.log(('Hey there, ${firstName} ${lastName[0]}!'))
}

function repeat(str, num){
    //인수의 개수에 맞게 함수를 안쓰면 아예 안됨 undefined를 못읽기 때문.
    let result = '';
    for(let i = 0; i < str; i++){
        result += str;
    }
    console.log(result)
}