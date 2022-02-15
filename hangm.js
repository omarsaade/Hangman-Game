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
document.querySelector(".game-info .category span").innerHTML = randomPropName;



