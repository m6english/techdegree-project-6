const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
let missed = 0;
const overlay = document.getElementById('overlay');
const phrases = [
'I am Beyonce always',
'Thats what she said',
'Identity theft is not a joke Jim',
'Who is justice beaver',
'Dunder Mifflin Paper Company'
];

// Gets random phrases
const getRandomPhraseAsArray = arr => {
    const index = arr[Math.floor(Math.random() * arr.length)];
    return index.split('');
}

// Adds phrase to the display
const addPhraseToDisplay = arr => {
    const phraseUl = document.querySelector('#phrase ul');
    for ( let i = 0; i < arr.length; i++ ) {
        const phraseLi = document.createElement('li');
        phraseLi.textContent = arr[i];
        phraseUl.appendChild(phraseLi);
        if ( arr[i] === " ") {
            phraseLi.className = 'space';
        } else {
            phraseLi.className = 'letter';
        }
    }
}


// Checks to see if letter is correct
const checkLetter = button => {
    const letters = document.querySelectorAll('li');
    let match = null;
    for ( let i = 0; i < letters.length; i++ ) {
        if ( letters[i].textContent.toLowerCase() === button ) {
            letters[i].classList.add('show');
            match = button;
        }
    } 
    return match;
}

//Checks to see if the player won
const checkWin = () => {
    const letterLi = document.getElementsByClassName('letter');
    const showLi = document.getElementsByClassName('show');
    const title = document.querySelector('.title');
    if ( letterLi.length === showLi.length ) {
        overlay.classList.add('win');
        overlay.style.display = 'flex';
        title.innerHTML = 'You Won!';
    } else if ( missed > 4 ) {
        overlay.classList.add('lose');
        overlay.style.display = 'flex';
        title.innerHTML = 'You Lost :(';
    }
}

// Dismisses overlay when user clicks start
btnReset.addEventListener( 'click', () => {
    overlay.style.display = 'none';
    const randomPhrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(randomPhrase);

});


keyboard.addEventListener( 'click', e => {
    if ( e.target.tagName === 'BUTTON' && e.target.className !== 'chosen' ) {
        e.target.classList.add('chosen');
        e.target.disabled = true;
        let letterMatch = checkLetter(e.target.textContent);
        if ( letterMatch === null ) {
            let heart = document.querySelectorAll('img');
            heart[missed].src = 'images/lostHeart.png';
            missed++;
    }
} return checkWin();
});

