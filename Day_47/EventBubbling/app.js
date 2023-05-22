const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function(e){
    container.style.backgroundColor = makeRandColor;
    e.stopPropagation();
    //이벤트가 더이상 버블링되지 않게한다. 따라서 밑에 있는 코드인 hide는 적용이 되지 않는다. 
})
container.addEventListener('click', function(){
    container.classList.toggle('hide');
})

const makeRandColor = () =>{
    const r = math.floor(Math.random() * 255);
    const g = math.floor(Math.random() * 255);
    const b = math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}