const add = function(x, y){
    return x + y;
}

//--똑같은 구문이다.

const add = (x,y) => {
    return x + y;
}


const square = num =>{
    return num * num;
}
//한개의 인자가 들어갈땐 굳이 괄호 안해줘도된다.

const rollDie = () => {
    return Math.floor(Math.random() * 6) +1
}


const rollDie = () => (
    Math.floor(Math.random() * 6) +1
)
// 암시적 반환은 return없이 반환이 가능하게 해준다.

const add = (a,b) => a + b
// 암시적 반환은 한줄로 적을 수도 있다. 
// 함수의 바디에 선언문이 딱하나만 있어야한다는것.
const rollDie = () => (
    // let msg = 'asdas';
    Math.floor(Math.random() * 6) +1
)
// 딱하나의 표현식만 있어야하는데 표현식이 두개여서 뭘 반환해야할지 몰라서 오류가 난다.