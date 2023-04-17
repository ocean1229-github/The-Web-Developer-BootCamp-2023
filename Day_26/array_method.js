let cats = ['blue', 'kitty'];
let dogs = ['rusty', 'wyatt'];
cats.concat(dogs)
// concat하면 blue kitty rusty wyatt 앞에있는게 먼저오고 뒤에 뒷 배열이 온다

cats.includes('blue');
// true
cats.includes('Blue');
// false
"Blue".indexOf('B')
// 0 이 나옴
"Blue".indexOf('e')
// 3 이 나옴
"Blue".indexOf('0')
// -1 이 나옴 -> indexOf 인덱스 순서 몇번인지 알려주는 메소드

let comboParty = ['rusty', 'wyatt', 'blue', 'kitty'];
comboParty.indexOf('rusty');
//0
comboParty.indexOf('rust');
//-1

//reverse 는 배열을 거꾸로 하게해준다.
comboParty.reverse();
//kitty blue wyatt rusty
//이러고 다시 원문을 보면 바뀐상태로있다.
