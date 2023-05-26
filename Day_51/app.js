const multipuly = (x,y) => x * y;

const square = (x) => multipuly(x, x);

const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
}

console.log("before")
isRightTriangle(3,4,5);

console.log("after")

// call stack
// 함수실행 -> square -> multipuly -> square -> 함수실행 반복.
// loupe -> call stack을 확인하는 사이트

// 크롬 디버거
// html f12 sources에들어가기 -> 확장 -> js파일 선택
// isRightTriangle(3,4,5)누르고 거기에 중단점 설정하기. (줄 라인 왼쪽)
// 코드 실행시키면 밑에 call stack이 나온다.
// code debug
