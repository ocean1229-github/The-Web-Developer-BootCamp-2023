console.log("hello!!!")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

console.log("GoodBye!!");

//setInterval-------------

const id = setInterval(() => {
    console.log(Math.random())
}, 2000);
//2초동안 계속 랜덤함수를 보여준다.