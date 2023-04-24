function collectEggs(){
    let totalEggs = 6;
    console.log(totalEggs);
}

collectEggs();
console.log(totalEggs);
//이건 안된다. 함수안에서만 사용가능함.1

let bird = 'Scarlet Macaw';
function birdWatch(){
    let bird = 'Great Blue Heron';
//    let bird = 'Great Blue Heron';
    console.log(bird);
}
birdWatch()