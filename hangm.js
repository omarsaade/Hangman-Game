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