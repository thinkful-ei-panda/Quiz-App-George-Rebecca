/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */


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

/********** DECLARATIONS/ASSIGNMENTS **********/

function getRandomQA(n) {
  let currentQuestion = STORE.trivia[n].question;
  let currentAnswers = STORE.trivia[n].answers;
  let correctAnswer = STORE.trivia[n].correct_answer;
  STORE.randomQuestion = {currentQuestion, currentAnswers, correctAnswer};
  return STORE.randomQuestion;
}

/********** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates

function generateBegin() {
  // generates intro page function
  $('main').html(`
  <section id='begin' class='group'>
    <header class='section-header item'>
      <h3 class='item'>A quiz of random questions to test your music knowledge.</h3>
    </header>
    <figure class="item"><img src="http://rs165.pbsrc.com/albums/u55/BJ_BOBBI_JO9/Dance%20and%20music%20related/Clubbin.gif~c200" width='200vw;' alt="DJ emoji"></figure>
    
    <div class='difficultySelect'>
    <form>
    <h3>Difficulty:<h3>
    <label for="easy">Easy</label>
    <input type='radio' id='easy' name='difficulty' required>

    <label for="medium">Medium</label>
    <input type='radio' id='medium' name='difficulty' required>

    <label for='hard'>Hard</label>
    <input type='radio' id='hard' name='difficulty' required>
    </form>
    </div>
    
    <button id='begin-btn' class='btn item'>Begin!</button>
  </section>`);
  console.log('`generateBegin` ran.');
}

function generateQuestion() {
  // generates question page 
  let n = Math.floor(Math.random() * (STORE.trivia.length) + 1);
  const {currentQuestion, currentAnswers, correctAnswer} = getRandomQA(n);
  let answersHTML = '';
  let i = 0;
  let questionHTML = 
  `<section id="form">
      <form class="group">
        <fieldset>
          <legend>${currentQuestion}</legend>
          <ul>
            <li id='question-num' class='q${STORE.questionNumber}'>Question: ${STORE.questionNumber}/${STORE.totalQuestions}</li>
            <li id='score'>Correct: ${STORE.correct} / Incorrect: ${STORE.incorrect}</li>
          </ul>`;
          console.log('`generateQuestion1` ran.');

          currentAnswers.forEach(answer => {
            answersHTML += `
            <div class='item'>  
              <label for='option-${i - 1}'>${answer}
                <input id='option-${i - 1}' type='radio' name='answer' value='${answer}' required>      
              </label>
            </div>`;
            i++;
          });
          console.log('`generateAnswer` ran.');
        questionHTML += answersHTML + `<button id='submit-btn' class='item btn'>Submit</button>
        </fieldset>
      </form>
  </section>`;

  $('main').html(questionHTML);
  console.log(n);
  console.log(currentQuestion);
  console.log(currentAnswers);
  console.log(correctAnswer);
  console.log('`generateQuestion2` ran.');
}

function generateCorrect() {
  // generates correct answer page
  $('main').html(`
  <section id='correct' class='group'>
    <h2 class='item'>That's Right, Good Job!</h2>
    <figure><img src="https://www.it24hrs.com/wp-content/uploads/2017/07/blob-emoji-good-bye-but-06.gif" width="200vw;" alt="happy blobmoji"></figure>
    <button id='next-btn' class='btn item'>Next</button>
  </section>`);
  console.log('`generateCorrect` ran.');
}

function generateIncorrect() {
  // generates incorrect answer page
  $('main').html(`
  <section id='wrong' class='group'>
    <h2 class='item'>That's wrong. Sorry, Keep Going!</h2>
    <h3 class="item">The correct answer is ${STORE.randomQuestion.correctAnswer}.</h3>
    <figure><img src="https://uploads.disquscdn.com/images/8c259f33f4a08235733954184016428bf471a5e39af6479398e2e8f7c2ab378d.gif" style='width: 100%;' alt='annoyed emoji'></figure>
    <button id='next-btn' class='btn item'>Next</button>
  </section>`);
  console.log('`generateIncorrect` ran.');
}

function generateResults() {
  // generates result page
  $('main').html(`
  <section id='result' class='group'>
    <h2 class='item'>You got ${STORE.correct} out of ${STORE.totalQuestions} right.</h2>
    <div class='item'>${STORE.message[STORE.correct]}</div>
    <button id='reset-btn' class='btn item'>Encore?</button>
  </section>`);
  console.log('`generateResults` ran.');
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderQuiz() {
  // renders begin page through generateBegin function
  let html = '';

  if (STORE.quizStarted === false) {
    $('main').html(generateBegin());
  }
  else if (STORE.questionNumber > 0 && STORE.questionNumber <= STORE.totalQuestions) {
    $('main').html(generateQuestion());
  }
  console.log('`renderQuiz` ran.');  
  }

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
// event handle when click begin button => renderQuestin function
function handleBegin() {
  $('main').on('click','#begin-btn', event => {
  
    STORE.quizStarted = true;
    STORE.questionNumber = 1;
    console.log(`${STORE.quizStarted}`);
    console.log(`${STORE.questionNumber}`);
    generateQuestion();
  });
  console.log('`handleBegin` ran.');
}

function handleDifficulty() {
 

  

  console.log('`handleDifficulty` ran.');
}

// event handle when click submit button - if answer is correct =>  generateCorrect add to score - 
// if answer is incorrect => generateIncorrect

function handleSubmit() {
  $('main').submit('#submit-btn', event => {
    event.preventDefault();
    let input = $('form input[type=\'radio\']:checked').val();
    console.log(input);

    if (input === STORE.randomQuestion.correctAnswer) {
      STORE.correct++;
      generateCorrect();
      console.log(STORE.correct);
    }
    else {
      STORE.incorrect++;
      generateIncorrect();
      console.log(STORE.incorrect);
    }
    console.log('Submit btn ran');
  });
  console.log('`handleSubmit` ran.');
}

// event handle when click next button - if more questions => go to next question add to questionNumber - if done with quiz => go to results page
function handleNext() {
  $('main').on('click','#next-btn', event => {
    if (STORE.questionNumber < STORE.totalQuestions) {
      STORE.quizStarted = true;
      STORE.questionNumber++;
      generateQuestion();
    } else {
      generateResults();
    }
  });
  console.log('`handleNext` ran.');
}

// event handle when click encore button => render function
function handleNewQuiz() {
  $('main').on('click','#reset-btn', event => {
    STORE.quizStarted = false;
    STORE.questionNumber = 0;
    STORE.correct = 0;
    STORE.incorrect = 0;
    STORE.totalQuestions = 5;
    renderQuiz();
  });
  console.log('`handleNewQuiz` ran.');
}

//  This function will be callback when page loads. Responsible for initial quiz rendering, and activating handler functions for quiz.
const handleQuiz = function() {
  renderQuiz();
  handleBegin();
  // handleDifficulty();
  handleSubmit();
  handleNext();
  handleNewQuiz();
};

$(handleQuiz);