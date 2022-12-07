const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
let missed = 0;
const overlay = document.getElementById('overlay');
const btnNew = document.querySelector('.btn_new');
const phraseUl = document.querySelector('#phrase ul');
const clearButtons = document.querySelectorAll('button');
let heart = document.querySelectorAll('img');


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

// calls the addphrase function with randomphrase as argument after both have been initialized
const randomPhrase = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(randomPhrase);

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
        overlay.classList.remove('lose');
        overlay.style.display = 'flex';
        title.innerHTML = 'You Won!';
        newGame();
    } else if ( missed > 4 ) {
        overlay.classList.add('lose');
        overlay.classList.remove('win');
        overlay.style.display = 'flex';
        title.innerHTML = 'You Lost :(';
        newGame();
    }
}

// Dismisses overlay when user clicks start
btnReset.addEventListener( 'click', () => {
    overlay.style.display = 'none';

});

// Stores the result of getRandomPhraseAsArray function in variable. Calls addPhraseToDisplay using that variable as an argument



// Responds to user input via clicks on the keyboard
keyboard.addEventListener( 'click', e => {
    if ( e.target.tagName === 'BUTTON' && e.target.className !== 'chosen' ) {
        e.target.classList.add('chosen');
        let letterMatch = checkLetter(e.target.textContent);
        if ( letterMatch === null ) {
            heart[missed].src = 'images/lostHeart.png';
            missed++;
    }
} return checkWin();
});

// Allows user to start new game without refreshing page
const newGame = () => {
    missed = 0;
    phraseUl.innerHTML = '';
    addPhraseToDisplay(randomPhrase);
    for ( let i = 0; i < clearButtons.length; i++ ) {
        clearButtons[i].classList.remove('chosen');
        for ( let i = 0; i < heart.length; i++ ) {
            heart[i].src = 'images/liveHeart.png';
        }
    }
}
