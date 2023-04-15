Math.PI;
//파이 구하기

Math.round(4.9);
// 반올림

//등등 여러 객체가 많다. 

Math.floor(23.90);
//23 무조건 내림

Math.ceil(34.1);
//35 무조건 올림

Math.random();
//요게 엄청 유용하게 쓰이는 듯
//할떄마다 각기 다른 소숫점자리의 수가 나온다.

//자연수를 생성하려면?
const step1 =  Math.random();
//0.596110421342142
const step2 =  step1 * 10;
//5.96110421342142
const step3 = Math.floor(step2);
//5
const step4 = step3 + 1;
//6

Math.floor(Math.random() * 10) + 1;
// 흐음

Math.floor(Math.random() * 5);
//0~4까지의 랜덤숫자가 나온다
Math.floor(Math.random() * 5) + 1;
//1~5까지의 랜덤숫자가 나온다

//그외에도 abs, power등 여러가지 많다.