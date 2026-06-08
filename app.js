roll = () => {
    let dice = document.getElementById('dice');
    let diceAudio = document.getElementById('diceAudio');
    let randomNum = Math.floor(Math.random() * 6) + 1;
    
    dice.classList.add('spin');
    
    setTimeout(() => {
        dice.classList.remove('spin');
        
        dice.className = 'dice dice-' + randomNum;
        dice.innerHTML = '';
        
        for (let i = 0; i < randomNum; i++) {
            let dot = document.createElement('div');
            dot.className = 'dot';
            dice.appendChild(dot);
        }
        
        diceAudio.play();
    }, 500);
}
