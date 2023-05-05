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

