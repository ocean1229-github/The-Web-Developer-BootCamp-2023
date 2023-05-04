Math.max(13,4,5,221,612,6,23,6273,333)
Math.min(2,5,1)
Math.max(nums)
//NaN
const nums = [1,2,3,4,,5,61,632,6,2,36,326,21,36,213,612,36,12]

Math.max(...nums)
//max함수가 잘써진다

Math.max(nums);
//안됨

console.log('hello')
//hello
console.log(...'hello')
//h e l l o
//이런식으로 전개가된다.

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]
//배열두개가 합쳐진다
//+ const allPets = [...cats, ...dogs, ~~~]
//해도 배열이 잘만들어진다.