


    const startBtn = document.getElementById('Startbtn');

    
    const Ranges = document.getElementsByName('Range');

    const maxNum = document.getElementById('maxNum');

    const enterNum = document.getElementById('EnterNum');

    const guessInput = document.getElementById('input');

    const checkBtn = document.getElementById('check');

    const guessList = document.getElementById('ListOfGuesses');
    
    const numberOfGuesses = document.getElementById('numberofguesses');

    let GivenRange = 0;
    let guessNumber = 0;
    let maxGuesses = 0;
    let remainingGuesses = 0;

    startBtn.addEventListener('click', start);
    checkBtn.addEventListener('click', check);
    Ranges.forEach(input => input.addEventListener('click', EnableBtn));

    function EnableBtn() {
        startBtn.disabled = false;
    }

    function getRange() {
        // retrieves Selected range
        for (var input of Ranges) {
            if (input.checked) {
                return parseInt(input.id);
            }
        }
        // Default to 10 if no range is selected
        return 10; 
    }

    function start() {
        GivenRange = getRange();
        guessNumber = Math.floor(Math.random() * GivenRange) + 1;
        maxGuesses = getMaxGuesses(GivenRange);
        remainingGuesses = maxGuesses;

        maxNum.textContent = GivenRange;

        enterNum.textContent = `Enter a number between 1 and ${GivenRange}`;

        guessList.innerHTML = '';
        numberOfGuesses.textContent = '';
        guessInput.value = '';

        startBtn.disabled = true;
        document.getElementById('NumberBox').style.display = 'none';
        document.getElementById('superContainer').style.display = 'flex';
        document.getElementById('max').textContent = range;
        document.getElementById('numberofguesses').textContent = maxAttempts;
    }


    function check() {

        const userInput = parseInt(guessInput.value);

         let NumOfAttempts = maxGuesses - remainingGuesses;

        remainingGuesses = remainingGuesses - 1;

        if (isNaN(userInput) || userInput < 1 || userInput > GivenRange) {
            
            return alert('Please enter a valid number within the range.');
        }
        
        if (userInput == guessNumber) {
            DisplayResult('Congratulations!');
            location.reload();
        } else if (remainingGuesses == 0) {

            DisplayResult('No more guesses left.');

            location.reload();

        } else {
            const hint = userInput > guessNumber ? 'Too high. Try again!' : 'Too low. Try again!';
            guessList.innerHTML += `<li> ${userInput} - ${hint}</li>`;
            numberOfGuesses.textContent = `Number of attempts: ${NumOfAttempts}`;
            guessInput.value = '';
        }
    }

    function DisplayResult(message) {


        if(message == 'No more guesses left.' )
        {
            alert(message);

            location.reload()
        }
        alert(message);
        // Reset the game
        location.reload()
    }

    

    function getMaxGuesses(range) {
        if (range == 10) {
                return 3;
        }
        else if (range == 100)
        {
                return 7;
        }
        else if (range == 1000) {
            return 10;
    }
    else {

                return 3;
        }
    }






        
    
