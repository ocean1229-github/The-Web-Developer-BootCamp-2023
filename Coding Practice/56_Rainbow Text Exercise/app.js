const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const text = document.querySelectorAll('span')

for(let i = 0; i < text.length; i++){
    text[i].style.color = colors[i]
}