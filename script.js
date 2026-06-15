// Declare variables below to save the different divs of your story.

let btn1 = document.querySelector(".option-one");
let btn3 = document.querySelector(".option-three");
let btn4 = document.querySelector(".option-four");
let btn5 = document.querySelector(".option-five");
let btn6 = document.querySelector(".option-six");
let btn7 = document.querySelector(".option-seven");
let btn8 = document.querySelector(".option-eight");
let home = document.querySelector(".home-button");

let opening = document.querySelector(".story-opening");
let option1 = document.querySelector(".option-one-screen");
let option3 = document.querySelector(".option-three-screen");
let option4 = document.querySelector(".option-four-screen");
let option5 = document.querySelector(".option-five-screen");
let option6 = document.querySelector(".option-six-screen");
let option7 = document.querySelector(".option-seven-screen");
let option8 = document.querySelector(".option-eight-screen");
let end5 = document.querySelector(".option-five-end");
let end8 = document.querySelector(".option-eight-end");


// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


btn1.addEventListener('click', function(){
    option1.style.display = "block";
    opening.style.display = "none";
    btn1.style.display = "none";
    btn3.style.display = "block";
    btn4.style.display = "block";
});

btn3.addEventListener('click', function(){
    option3.style.display = "block";
    option1.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
    btn5.style.display = "block";
    btn6.style.display = "block";
});

btn5.addEventListener('click', function(){
    end5.style.display = "block";
    btn5.style.display = "none";
    btn6.style.display = "none";
    home.style.display = "block";
    option3.style.display = "none";
})

home.addEventListener('click', function(){
    opening.style.display = "block";
    btn1.style.display = "block";
    end5.style.display = "none";
    home.style.display = "none";
})


btn4.addEventListener('click', function(){
    option4.style.display = "block";
    btn7.style.display = "block";
});

