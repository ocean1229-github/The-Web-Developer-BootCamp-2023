// push, toUpperCase() 등등이 메서드이다.
// function ~~~ 이게 함수다

// 메서드와 함수의 차이점!
// 모든 메서드는 함수이지만 모든 함수가 메서드인 건 아니다.
const myMath = {
    PI: 3.14159,
    square: function(num){
        return num * num;
    },
    cube: function(num){
        return num ** 3;
    }
}

//myMath
//{PI: 3.14159, square: f, cube: f}
//myMath.square
//이러면 square함수불러옴
//myMath.square(2)
//4
// myMath.cube(2)
//8

// Shorthand

const myMath = {
    PI: 3.14159,
    square(num){
        return num * num;
    },
    cube(num){
        return num ** 3;
    }
}