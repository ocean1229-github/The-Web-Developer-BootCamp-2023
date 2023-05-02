const add = function(x, y){
    return x + y;
}

//--똑같은 구문이다.

const add = (x,y) => {
    return x + y;
}


const square = num =>{
    return num * num;
}
//한개의 인자가 들어갈땐 굳이 괄호 안해줘도된다.

const rollDie = () => {
    return Math.floor(Math.random() * 6) +1
}