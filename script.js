

var answers = document.querySelectorAll('.questions ul li');
var dropdownIcon = document.querySelectorAll('.dropdown');
var answerDiv = document.querySelectorAll('.answer');



for (let i=0; i < answers.length; i++) {
    answers[i].addEventListener('click', function() {
        //removes previously set changes
        for (let j=0; j < answers.length; j++) {
            answers[j].classList.remove('active');
            answerDiv[j].style.display = 'none';
            dropdownIcon[j].style.transform = 'scaleY(1)';
        }
        //adds styling changes on click
        answers[i].classList.add('active');
        dropdownIcon[i].style.transform = 'scaleY(-1)';
        //changes answer div display from none to block
        answerDiv[i].style.display = 'block';
    })
}

