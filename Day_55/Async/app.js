//비동기 함수 작성시
//Promise로 반환하라고 하지않아도 자동반환됨
// async function hello(){
//     //자동으로 Promise가 뜬다.
// }

// const sing = async () => {
//     // arrow function
//     // asfd.asdf();
//     // promise는 되는데 오류가 뜬다.

//     // throw new Error("UH OH")
//     // 비동기 함수 중 err가 될경우 Promise의 상태는 실패로 뜬다.
//     throw "OH NO, Problem"
//     return 'LA LA LA LA'
// }

// sing()
//     .then(data => {
//         console.log("PROMISE RESOLVED WITH: ". data)
//     })
//     .catch(err => {
//         console.log("OH NO, PROMISE REJECTED")
//         console.log(err)
//     })

const login = async (username, password) => {
    if(!username || !password) throw 'Missing Credentials'
    if(password === 'corgifeetarecute') return 'Welcome!'
    throw 'Invalid Password'
}

login('akjsdhsa' , 'corgifeetarecute') //welcome이 뜬다.
.then(msg => {
    console.log("Logged in!")
    console.log(msg)
})
.catch(err => {
    console.log("Err!")
    console.log(err)
})
// async 의 경우 반환 값이 있을땐 resolved가 나타나고
// 오류시엔 reject와 같이 나타난다.