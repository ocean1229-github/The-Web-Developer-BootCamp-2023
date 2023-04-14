indexOf('h');
//지정한 문자로 시작하는 인덱스 인수를 보여준다

"haha that is so funny!".indexOf('h')
//0
"haha that is so funny!".indexOf('!')
//21
"haha that is so funny!".indexOf('$')
//-1 (없는 경우임.)
"haha that is so funny!".indexOf('is')
//10



msg = "haha that is so funny!".slice(5)
//that is so funny! -> 자르는거
msg.slice(5)
//"that is so funny!"
msg.slice(5, 9)
//"that"

msg.replace('haha', 'lolololo');
msg
//lolololo that is so funny
//첫번째 문자열 부분을 두번째 문자열로 바꾸는것

msg.repeat(5)
//걍 이건 똑같이 반복하는 것.

