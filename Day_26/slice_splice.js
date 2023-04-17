let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
colors.slice(3);
//green blue indigo violet
//slice의 경우 원하는 수 만큼 앞에서 잘라버리는듯.

let coolColors = colors.slice(3);
// coolcolors -> green blue indigo violet

colors;
//이건 그대로

let warmColors = colors.slice(0, 3);
// 원하는 부위를 자르려면 이런식으로 하몀ㄴ되는듯

colors.slice(-3);
//-3하면 마지막부터 3개를 자름. 
//blue indigo violet

colors.splice(5, -1);
//splice는 추가도되고 삭제도된다,.
//splice(시작점, 삭제할개수(0하면 추가됨), 끝지점)

let days = ['Monday', 'Tuesday', 'Wednesday'];
days.splice(1,2);
//Tuesday, Wednesday 삭제
days;
//Monday

colors.splice(1, 0, 'red-orange');
//이렇게하면 1번 인덱스에 redorange가 추가됨
// red, redorange, ~~~

colors.splice(3, 0, 'yellow-green', 'forestgreen');

colors.splice(2, 2, 'DELETED!!');

let scores = [1, 70, 100, 50, 30, 25900, 9, -21, 0, 34];
scores.sort();
//첫번째 자리 숫자만 계산하기때문에 정렬에 사실 별로다.