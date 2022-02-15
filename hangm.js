//letters
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

//Object of Words + Categories
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
}

//Get Random Property
//bta3tik random keys;
//    [programming , movies ,people , countries]
let allkeys = Object.keys(words);

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

//Handle Clicking on Letters
document.addEventListener("click", (e) => {

    if (e.target.className === 'letter-box') {

        e.target.classList.add("clicked");

        // Get Cliked Letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        console.log(lettersAndSpace); //the Chosen Word
        //alexander  ==> ['A','L','E','X','A','N','D','R','E]


        lettersAndSpace.forEach((wordLetter, index) => {

            //If The Clicked Letter Equal To One Of The Chosen Word Letter

            if (theClickedLetter == wordLetter) {
                console.log(`Found At Index Number ${index}`);
            }


        });

    }

});





