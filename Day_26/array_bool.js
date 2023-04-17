let luckyNum = 87;

// .9999999999999999 이런식으로 메모리에 저장된다.

let luckyNums = [2, 345, 23];
//메모리가 다 다르게 적용되기때문에,...?

let nums = [1,2,3];
let numsCopy = nums;
nums;
numsCopy;
//같은 값을가진다
nums.push(4);
// nums, numsCopy에 똑같이 4라는 값이 들어감
// numsCopy로 nums의 메모리를 참조했기 때문에 값이 같게 나옴.
// 반대도 마찬가지임.
// nums === numsCopy