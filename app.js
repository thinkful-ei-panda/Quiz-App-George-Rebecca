/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
'use strict';

// const trivia = [
//   {
//     'category': 'Entertainment: Music',
//     'type': 'multiple',
//     'difficulty': 'easy',
//     'question': 'Which singer was featured in Jack &Uuml; (Skrillex &amp; Diplo)&#039;s 2015 song &#039;Where Are &Uuml; Now&#039;?',
//     'correct_answer': 'Justin Bieber',
//     'incorrect_answers': ['Selena Gomez', 'Ellie Goulding', 'The Weeknd']
//   }, {
//     'category': 'Entertainment: Music',
//     'type': 'multiple',
//     'difficulty': 'easy',
//     'question': 'Who is the lead singer of the band Coldplay?',
//     'correct_answer': 'Chris Martin',
//     'incorrect_answers': ['Chris Isaak', 'Chris Wallace', 'Chris Connelly']
//   }, {
//     'category': 'Entertainment: Music',
//     'type': 'multiple',
//     'difficulty': 'easy',
//     'question': 'What was the name of singer Frank Ocean&#039;s second studio album, which was released on August 20, 2016?',
//     'correct_answer': 'Blonde',
//     'incorrect_answers': ['Brunette', 'Black', 'Burgundy']
//   }, {
//     'category': 'Entertainment: Music',
//     'type': 'multiple',
//     'difficulty': 'easy',
//     'question': 'Kanye West at 2009 VMA&#039;s interrupted which celebrity?',
//     'correct_answer': 'Taylor Swift',
//     'incorrect_answers': ['MF DOOM', 'Beyonce', 'Beck']
//   }, {
//     'category': 'Entertainment: Music',
//     'type': 'multiple',
//     'difficulty': 'easy',
//     'question': 'Which Nirvana album had a naked baby on the cover?',
//     'correct_answer': 'Nevermind',
//     'incorrect_answers': ['Bleach', 'In Utero', 'Incesticide']
//   }, {
//     'category': 'Entertainment: Music',
//     'type': 'multiple',
//     'difficulty': 'easy',
//     'question': 'Kanye West&#039;s &quot;Gold Digger&quot; featured which Oscar-winning actor?',
//     'correct_answer': 'Jamie Foxx',
//     'answers': ['Alec Baldwin', 'Jamie Foxx', 'Dwayne Johnson', ' Bruce Willis']
//   }
// ];

// let STORE = {
//   quizStarted: false,
// questionNumber: 0,
// correct: 0,
// incorrect: 0,
//   totalQuestions: 5
// };




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



// function getTriviaQuestions() {
//   // load external .json file and assign to a local variable
//   $.getJSON('triviaEasy.json', (data) => trivia = data);
// }
/********** DECLARATIONS/ASSIGNMENTS **********/

let randomTriviaNum = STORE.trivia[Math.floor(Math.random() * STORE.trivia.length)];
let currentQuestion = STORE.trivia[randomTriviaNum].question;
let currentAnswers = STORE.trivia[randomTriviaNum].answers;
let correctAnswer = STORE.trivia[randomTriviaNum].correct_answer;
let incorrectStored = STORE.incorrect;
let correctStored = STORE.correct;
let message5 = 'CONGRATULATIONS!'<br>'You\'re a Music Master!';
let message4 = '';
let message3 = '';
let message2 = '';
let message1 = '';

/********** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates

function generateBegin() {
  // generates intro page function
  const beginHTML = `
  <section id='begin' class='group'>
    <header class='section-header item'>
      <h2 class='item'>How well do you know Music?</h2>
      <h3 class='item'>A quiz of random questions to test your music knowledge.</h3>
    </header>
    <figure class="item"><img src="http://rs165.pbsrc.com/albums/u55/BJ_BOBBI_JO9/Dance%20and%20music%20related/Clubbin.gif~c200" width='15%;' alt="DJ emoji"></figure>
    <button id='begin-btn' class='btn item'>Begin!</button>
  </section>`;

  $('main').html(beginHTML);
}

function generateAnswers() {
  // generates answer list
  let answersHTML = '';
  let i = 0;

  currentAnswers.forEach(answer => {
    answersHTML += `
    <div class='item'>  
      <label for='option-${i - 1}'>${answer}
        <input id='option-${i - 1}' type='radio' name='answer' value='${answer}' required>      
      </label>
    </div>`;
    i++;
  });
  $('main').html(answersHTML);
}

function generateQuestion() {
  // generates question page 
  const questionHTML = `
  <section id="form">
      <form class="group">
        <fieldset>
          <legend>${currentQuestion}</legend>
          <ul>
            <li id='question-num' class='q${STORE.questionNumber + 1}'>Question: ${STORE.questionNumber + 1}/${STORE.totalQuestions}</li>
            <li id='score'>Correct: ${correct} / Incorrect: ${incorrect}</li>
          </ul>
          ${generateAnswers()}
          <button id='submit-btn' class='item btn'>Submit</button>
        </fieldset>
      </form>
    </section>`;

  $('main').html(questionHTML);
}

function generateCorrect() {
  // generates correct answer pop-up
  const correctHTML = `
  <section id='correct' class='pop-up group'>
    <h2 class='item'>That's Right, Good Job!</h2>
    <figure><img src="https://www.it24hrs.com/wp-content/uploads/2017/07/blob-emoji-good-bye-but-06.gif" width="13%;" alt="happy blobmoji"></figure>
    <button id='next-btn' class='btn item'>Next</button>
  </section>`;

  $('main').html(correctHTML);
}

function generateIncorrect() {
  // generates incorrect answer pop-up
  const incorrectHTML = `
  <section id='wrong' class='pop-up group'>
    <h2 class='item'>Sorry, Keep Going!</h2>
    <h3 class="item">The correct answer is ${correctAnswer}.</h3>
    <figure><img src="https://uploads.disquscdn.com/images/8c259f33f4a08235733954184016428bf471a5e39af6479398e2e8f7c2ab378d.gif" style='width: 10%;' alt='annoyed emoji'></figure>
    <button id='next-btn' class='btn item'>Next</button>
  </section>`;

  $('main').html(incorrectHTML);
}

function generateResults() {
  // generates result pop-up
  const resultsHTML = `
  <section id='result' class='pop-up group'>
    <h2 class='item'>You got ${correctStored} out of ${totalQuestions} right!</h2>
    <p class='item'>message${correctStored}</p>
    <figure class='item'><img src='https://discordemoji.com/assets/emoji/BlobRave.gif' width="10%"; alt=''></figure>
    <button id='reset-btn' class='btn item'>Encore?</button>
  </section>`;

  $('main').html(resultsHTML);
}

/********** RENDER FUNCTION(S) **********/

{/* // This function conditionally replaces the contents of the <main> tag based on the state of the store */}
function renderQuiz() {
  // renders begin page through generateBegin function
  let html = '';

  if (STORE.quizStarted === false) {
    $('main').html(generateBegin);
  }
  else if (STORE.questionNumber > 0 && STORE.questionNumber <= STORE.totalQuestions.length) {
    $('main').html(generateQuestion);
  }
  else {
    $('main').html(generateResults);
    console.log('generating the results');
  }

  console.log('`renderQuiz` ran.');  
}

function renderQuestion() {
  // renders randomly selected new question through generateQuestion function
}

function renderCorrect() {
  // renders updates to add to score through generateCorrect function
}

function renderIncorrect() {
  // renders updates score through generateIncorrect function
}

function renderResults() {
  // renders results from generateResults function
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
// event handle when click begin button => renderQuestin function
function handleBegin() {
  $('main').on('click','#begin-btn', event => {
    event.preventDefault();
      
    STORE.quizStarted = true;
    STORE.questionNumber = 1;
    console.log('Begin button ran');
    console.log(`${STORE.quizStarted}`);
    console.log(`${STORE.questionNumber}`);
    renderQuiz();
  });
  console.log('`handleBegin` ran.');
}

// event handle when click submit button - if answer is correct =>        generateCorrect add to score - if answer is incorrect => generateIncorrect
function handleSubmit() {
  $('main').submit('#submit-btn', event => {
    event.preventDefault();

    let i = STORE.questionNumber - 1;
    let input = $('form input[type=\'radio\']:checked').val();
    console.log(i);
    console.log(input);

    if (input === correctAnswer) {
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
 

  console.log('`handleNext` ran.');
}

// event handle when click encore button => render function
function handleNewQuiz() {
 

  renderQuiz();

  console.log('`handleNewQuiz` ran.');
}

//  This function will be callback when page loads. Responsible for initial quiz rendering, and activating handler functions for quiz.
function handleQuiz() {
  renderQuiz();
  handleBegin();
  handleSubmit();
  handleNext();
  handleNewQuiz();
}

$(handleQuiz);