const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
let missed = 0;
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
        if ( letters[i].textContent.toLowerCase === button ){
            letters[i].classList.add('show');
            match = button;
        }
    } 
    return match;
}

// Checks to see if the player won
const checkWin = () => {

}

// Dismisses overlay when user clicks start
btnReset.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    const randomPhrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(randomPhrase);

});


keyboard.addEventListener('click', e => {
    let letterMatch = checkLetter(e.target.textContent);
    if ( e.target.tagName === 'BUTTON' && e.target.className !== 'chosen' ) {
        e.target.classList.add('chosen');
        if ( letterMatch === null ) {
            missed++;
    }
}
});

