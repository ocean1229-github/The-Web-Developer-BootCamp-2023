function add(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
    let sum = x + y;
    return sum;
}
//함수는 하나만 반환된다.
// 두 개 반환하고 싶으면 하나의 배열 안에 2개를 반환해라

//add(add(1,6),8) 이런것도 실행가능.