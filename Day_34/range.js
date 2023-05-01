let radius = 8;
if(radius < 0){
    const PI = 3.14159;
    let msg = 'HI!!!';
}

console.log(radius);
//작동 잘됨
console.log(PI);
//작동안됨

for(let i = 0; i<5; i++){
    let msg = "heliwo";
}

console.log(msg)
//이렇게 했을때 아무것도 안나온다.

for(let i = 0; i<5; i++){
    var msg = "heliwo";
    console.log(msg)
}
console.log(msg)
//이렇게 했을때 잘 나온다.
console.log(i)
//이렇게 했을떄 5가 나온다.