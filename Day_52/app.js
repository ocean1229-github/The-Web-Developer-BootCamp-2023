// const newTodo = input.value;
// saveToDatabase(newTodo);
// input.value = '';

console.log("HELLO EVERYONE!")
setTimeout(() => {
    console.log("Here  is your data from the server...")
}, 3000)
console.log("I AM AT THE END OF THE FILE!")
// 브라우저 자체가 무엇이든 간에
// 브라우저가 js로 작성되는게아니라 대개 c++로작성된다
// 따라서 js가 하지못하는 기능을 해줄 수 있다.
// web apis의 경우는 js가 못하기때문에 브라우저에게 맡긴다.

// 이 함수를 실행시킬경우
// 첫번쨰 로그가 뜨고 
// 두번째로 sesTimeout함수를 실행시킬 경우 3~4초간 web apis 이정보를 저장한다고 소요한다.
// 이후 세번째 로그가 뜨고, 세번째 로그가 다되고서야 서버에 넘긴 데이터 로딩이 다되기때문에
// 마지막으로 두번째 로그가 뜬다.