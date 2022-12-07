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
    const index = Math.floor(Math.random() * arr.length);
    return arr[index]
}

// Adds phrase to the display
const addPhraseToDisplay = arr => {
    for ( let i = 0; i < arr.length; i++ ) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        const phrase = document.getElementById('phrase');
        phrase.appendChild(li);
        if ( arr[i] === " ") {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
    }
}

// Checks to see if letter is correct
const checkLetter = button => {
    const letters = document.querySelectorAll('li');
    let match = null;
    for ( let i = 0; i < letters.length; i++ ) {
        if ( button === letters[i].textContent ){
            letters.className = 'show';
            match = button;
        }  else {
            match = false;
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
    
})


keyboard.addEventListener('click', e => {
    if ( e.target.tagName !== 'BUTTON' || e.target.className === 'chosen' ) {

    } else {
        e.target.className = 'chosen';
        

    }
})

