

var answers = document.querySelectorAll('.questions ul li');
var dropdownIcon = document.querySelectorAll('.dropdown');
var answerDiv = document.querySelectorAll('.answer');



for (let i=0; i < answers.length; i++) {
    answers[i].addEventListener('click', function() {
        //removes previously set changes
        for (let j=0; j < answers.length; j++) {
            answerDiv[j].style.display === 'none' ? '' : 'none';
            dropdownIcon[j].style.transform = 'scaleY(1)';
        }
        //adds styling changes on click
        answers[i].classList.toggle('active');

        dropdownIcon[i].classList.toggle('change_arrow');
        answerDiv[i].classList.toggle('show_answer');
    })
}

