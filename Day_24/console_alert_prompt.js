console(1+4, "HI", true);
//5 "HI" true

console.warn("UH OH WARNING!");
//UH OH WARNING! -> 위험 경고까지 뜬다

console.error("AKAKDFJALS");
//마찬가지로 ERROR경고와 같이 내가 넣은 문구가 뜬다

alert("Hi there!");
// 하면 화면에 알람뜨는거

prompt("please enter a number");
// 알림처럼 뜰수도 있음

let userInput = prompt("please enter a number");
//웹사이트에서 97입력
userInput;
//"97"
userInput + 1;
//"971"
parseInt(userInput)
//97
parseInt("101")
// 101
parseInt("101asdffdsafdsafdsa")
// 101
