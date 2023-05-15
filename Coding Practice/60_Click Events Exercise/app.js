const hello = document.querySelector('#hello')
const bye = document.querySelector('#goodbye')

function hhi(){
    console.log('hello')
}
function bbye(){
    console.log('goodbye')
}

hello.addEventListener('click', hhi)
bye.addEventListener('click', bbye)