//id와 일치하는 내용을 객체에서 가져와라

const banner = document.getElementById('banner')

document.getElementById('toc')
const toc = document.getElementById('toc')
//이 객체의 특성들을 다 보여준다.
//div#toc

//---------------------------------

document.getElementByTagName('img')
//HTMLCollection(4)

const allImages = document.getElementsByTagName('img')

for(let img of allImages){
    console.log(img.src)
}
//html에 있는 이미지의 출처 모두를 다 보여준다(4개)
//배열이 아니다.

const squareImages = document.getElementsByTagName('square');

// for(let img of squareImages){
//     img.src = '사진 중 한개의 출처를 넣음'
// }

//-------------------------------------

document.querySelecter('p')
document.getElementsByTagName('p')
// 위 두개가 동일하다
document.querySelecter('#banner')
document.querySelecter('.square')

document.querySelecter('a[title="Java"]')
//이러면 a태그의 title = java를 찾아준다.

document.querySelecterAll('p')
//p문단 모두를 찾아준다.
document.querySelecter('p')
//첫번째 일치내용만 나온다.

document.querySelecterAll('img')
document.querySelecterAll('a')
//24
document.querySelecterAll('p a')
//17
const links = document.querySelecterAll('p a');

for(let link of links){
    console.log(link.href)
}
//모든 앵커태그 출처가 나온다.