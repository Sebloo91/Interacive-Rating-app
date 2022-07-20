
const submitButton = document.querySelector('.submit-button'); //changed from "submit_button"
const cardOne = document.querySelector('.card-one'); // card one and two were made up by
const cardTwo = document.querySelector('.card-two');
let addPoint = document.getElementById("add-point")
let scoreGivenEl = document.getElementById("score-given")
let scoreGiven = ''


submitButton.addEventListener('click', onSubmit); //for the onSubmit you can make this anything you want. //changed from "submit_button"
//ratingBtns.forEach( btn =>{
   // btn.addEventListener('click', handleRatingBtnClick);  < this was all removed. 
//})

function onSubmit(){
    cardOne.classList.add('hide')
    cardTwo.classList.remove('hide')  
}

function addOnePoint(){
    scoreGiven = 1
    scoreGivenEl.textContent = "You selected" + " " + scoreGiven + " " + "out of 5"
}

function addTwoPoint(){
    scoreGiven = 2
    scoreGivenEl.textContent = "You selected" + " " + scoreGiven + " " + "out of 5"
}


function addThreePoint(){
    scoreGiven = 3
    scoreGivenEl.textContent = "You selected" + " " + scoreGiven + " " + "out of 5"
}


function addFourPoint(){
    scoreGiven = 4
    scoreGivenEl.textContent = "You selected" + " " + scoreGiven + " " + "out of 5"
}


function addFivePoint(){
    scoreGiven = 5
    scoreGivenEl.textContent = "You selected" + " " + scoreGiven + " " + "out of 5"
}




