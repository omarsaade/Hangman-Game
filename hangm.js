//letters
//Create Keyborad
const letters = "abcdefghijklmnopqrstuvwxyz";

//Get Array From Letters
let lettersArray = Array.from(letters);

// console.log(lettersArray);

//Select Letters Conatainer
let lettersContainer = document.querySelector(".letters");

//Generate Letters
lettersArray.forEach(letter => {
    // create span
    let span = document.createElement("span");

    //create Letter TextNode
    let theLetter = document.createTextNode(letter);

    //Append The letter To SPan
    span.appendChild(theLetter);


    //asdd Class On Span
    span.className = "letter-box"

    //append Span to The Letters Conatianer
    lettersContainer.appendChild(span);
});

/////////////////// 




//Object of Words + Categories
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
}

//Get Random Property
//bta3tik random keys;

let allkeys = Object.keys(words);
// (4) ['programming', 'movies', 'people', 'countries']

//Random Number Depend On Keys Length

//    0 To 3
let randomPropNumber = Math.floor(Math.random() * allkeys.length);

//Category
//random category / btjeblak one Random category
//programming , movies , people....
let randomPropName = allkeys[randomPropNumber];

//Category Words
//btjeblak el array el 5assa bel category litna2et
// (5) ['Albert Einstein', 'Hitchcock', 'Alexander', 'Cleopatra', 'Mahatma Ghandi']
let randomPropValue = words[randomPropName];


//Random Number Depend on Words
// 0 to 4
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

//The Chosen Words
// btna2e el kelme men el array
//Alexander
let randomValueValue = randomPropValue[randomValueNumber];


//set Category Info
//people aw programmming or....
document.querySelector(".game-info .category span").innerHTML = randomPropName;

//Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

//Convert Chosen Word To Array
//alexander  ==> ['A','L','E','X','A','N','D','R','E]
let lettersAndSpace = Array.from(randomValueValue);

//Create Spans Depend On Word
lettersAndSpace.forEach(letter => {
    //Create Empty Span
    let emptySpan = document.createElement("span");

    // if Letter Is Space
    if (letter === ' ') {
        //add Class To The Span
        emptySpan.className = 'with-space';
    }
    //Append Span to The Letters Guess Container
    lettersGuessContainer.appendChild(emptySpan);


});

//Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

//set Wrong Attempts

let wrongAttempts = 0;

//Select the draw element
let theDraw = document.querySelector(".hangman-draw");


//Handle Clicking on Letters
document.addEventListener("click", (e) => {
    //set The Choose Status
    let theStatus = false;

    if (e.target.className === 'letter-box') {

        e.target.classList.add("clicked");

        // Get Cliked Letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        // console.log(lettersAndSpace); //the Chosen Word
        // //alexander  ==> ['A','L','E','X','A','N','D','R','E]


        //The Chosen Word
        // ['a','l','e','x','a','n','d','r','e']
        let theChosenWord = Array.from(randomValueValue.toLowerCase());




        theChosenWord.forEach((wordLetter, WordIndex) => {

            //If The Clicked Letter Equal To One Of The Chosen Word Letter


            if (theClickedLetter == wordLetter) {
                //check if there is a similiar letter in the array (the chosen word)

                theStatus = true;

                //Loop on All Guess Spans
                //Arrange letter on span tahet
                guessSpans.forEach((span, spanIndex) => {

                    if (WordIndex === spanIndex) {

                        span.innerHTML = theClickedLetter;

                    }
                });

            }


        });
        //outside loop
        // if letter is wrong 
        if (theStatus !== true) {

            //increase The Wrong Attempts
            wrongAttempts++;

            //add Class Wrong On The Draw Element
            theDraw.classList.add(`wrong-${wrongAttempts}`);

            //play Fail Sound
            document.getElementById("fail").play();

            if (wrongAttempts === 8) {
                endGame();
                lettersContainer.classList.add("finished");
            }

        } else {

            //play sucess sound
            document.getElementById("success").play();


        }



    }

});
//End Game Function
function endGame() {
    let div = document.createElement("div");
    let divText = document.createTextNode(`Game Over , the world Is ${randomValueValue}`);
    div.appendChild(divText);
    div.className = 'popup';

    document.body.appendChild(div);

}





