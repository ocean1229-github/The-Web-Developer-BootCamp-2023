// // proto
// []
// // -> __proto__

// arr.sing = function() {console.log("LA LA LA LA!")}
// // 프로토타입을 참조하는 특성
// // 프로토타입은 많은 메서드를 가지고있다.
// // 
// const body = document.body
// console.dir(body)

// // body의 특성들이 나옴
// // 아래는 프로토타입이 있다.
// // __proto__: HTMLBodyElement 프로토타입 템플릿에 해당하는
// // 즉, 이  html body 템플릿에 해당하는 다양한 메서드와 특성이 있다.

// // 다른 종류의 객체에 대한 프로토타입인 하나의 객체가 있다.

// Array.prototype
// //모든 프로토타입이 다있다.

// String.prototype

// String.prototype.grumpus = () => alert("GO AWAY!!")

// const cat = "Blue"
// cat.grumpus()

String.prototype.yell = function() {
    return `OMG!!!! ${this.toUpperCase()}!!!!! AHHHHH!`
};

// 콘솔 창에 "i love you".yell()
// 이렇게 치면
// OMG!!!! I LOVE YOU!!!!! AHHHHH!
// 이렇게 뜸

Array.prototype.pop = function() {
    return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"
}
// [3,4,5].pop()
// -> 이러면 기존의 pop 프로토 타입인 pop이 실행되지 않고 그 위에 글이 뜸.
// 추천하지는 않음

const dog = 'timothy'

dog.__proto__

// 프로토타입을 사용할 일은 거의 없다.