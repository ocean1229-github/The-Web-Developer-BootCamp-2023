const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log("YOU CLICKED ME!")
    console.log("I HOPE THIS WORK")
}

function scream(){
    console.log("AAAAHHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;
//마우스를 요소에 올리면 바로 엔터친것처럼되는 효과.

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1')
}