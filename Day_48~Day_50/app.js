const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponet){
    if(!isGameOver){
        player.score += 1;

        if(player.score + 1 === winningScore && opponet.score === player.score){
            winningScore = winningScore + 1;
        }

        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponet.display.classList.add('has-text-danger');
            player.button.disabled= true;
            opponet.button.disabled= true;
        }
        player.display.textContent = player.score;
    }
}

p1Button.addEventListener('click', function(){
    updateScores(p1, p2)
})
p2Button.addEventListener('click', function(){
    updateScores(p2, p1)    
})

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value)
})

resetButton.addEventListener('click', reset)

function reset(){
    isGameOver = false;
    for(let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    // p1.score = 0;
    // p2.score = 0;
    // p1.display.textContent = 0;
    // p2.display.textContent = 0;
    // p1.display.classList.add('has-text-success', 'has-text-danger');
    // p2.display.classList.add('has-text-success', 'has-text-danger');
    // p1.button.disabled= false;
    // p2.button.disabled= false;
}