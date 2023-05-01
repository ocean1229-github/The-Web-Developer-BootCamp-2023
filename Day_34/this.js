//this란  메서드에 있는 객체를 가르킬때 사용

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
        console.log("THIS IS:", this);
        //고양이에 관련된 객체를 모두 출력한다.
        console.log('${this.name} says Meowww');
        //Blue Steels says Meowww
    }
}

const meow2 = cat.meow;

function scream(){
    console.log('AAAAAAAAAAAAAAAAAAAAA')
}
//scream() 후 정상작동
//window.scream()
//정상작동