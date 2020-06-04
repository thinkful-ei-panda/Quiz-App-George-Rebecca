'use strict';

const musicTrivia = [
    {
      question: '',
      answers: [
      ],
      correctAnswer: ''
    },
    {
      question: '',
      answers: [
        ],
      correctAnswer: ''
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the quiz is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function genIntro() {
  // generates intro page function
}

function genQuestion() {
  // generates question page
}

function genCorrect() {
  // generates correct answer pop-up
}

function genIncorrect() {
  // generates incorrect answer pop-up
}

function genResults() {
  // generates result pop-up
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderIntro() {
  // renders intro page through genIntro function
}

function renderQuestion() {
  // renders randomly selected new question through genQuestion function
}

function renderCorrect() {
  // renders updates to add to score through genCorrect function
}

function renderIncorrect() {
  // renders updates score through genIncorrect function
}

function renderResults() {
  // renders results from genResults function
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleStart() {
  // event handle when click begin button => renderQuestin function
}

function handleSubmit() {
  // event handle when click submit button - if answer is correct =>  renderCorrect add to score - if answer is incorrect => renderIncorrect
}

function handleNext() {
  // event handle when click next button - if more questions => go to next question add to questionNumber - if done with quiz => go to results page
}

function handleNewQuiz() {
  // event handle when click encore button => renderIntro function
}