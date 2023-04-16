const bassist = 'Paul';
let days = ['Monday', 'Tuesday', 'Wednesday'];

days
//하면 배열뜸.

let kitchenSink = [treu, undefinded, 12, 9.9999, NaN, false, null, 'HIIIIII!']
"monday"[0]
//"m"

days[0]
//"monday"

days[300]
//undefinded. 오류가아닌 없다고 나온다.

let firstName = "colt";

firstName[0];
//"c"
firstName[0] = 'C';
firstName 
// colt 문자열에서는 바뀌는게 없다 다만 배열에서는 바뀐다

let colors = ['rad', 'orange', 'yalloww'];
colors[0] = 'red';
//이건 고쳐짐
colors[2] = 'yellow';
colors[1] = 70;
// 타입 변경도 가능.
colors[10] = "indigo";
//이럴경우 red 70 yellow empty*7 "indigo" 이런식으로 중간에 빈 배열이 자동생성된다.
