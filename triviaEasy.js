/* eslint-disable no-unused-vars */


const STORE = {
  quizStarted: false,
  questionNumber: 0,
  correct: 0,
  incorrect: 0,
  totalQuestions: 5,

  message: [
    `<h2>Well...I wouldn't quit your day job just yet.<br>Please come back when your eyes aren't leaking and try again!<h2> 
    <figure><img src='https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Crying_200px.gif' width="70%"; alt=''></figure>
    <h3>*Sobbing Hysterically*</h3>`,
    `<h2>Hmmm. Atleast you got 1 right!<br>You may be hangry and need a snack. Come back and try again!<h2> 
    <figure><img src='https://discordemoji.com/assets/emoji/blobshake.gif' width="60%"; alt=''></figure>
    <h3>Aaaggghhh %@*?&$#!</h3>`,
    `<h2>NICE TRY!<br>Keep practicing and one day you could be a Music Trivia Master!<h2> 
    <figure><img src='https://emojis.slackmojis.com/emojis/images/1500426362/2651/allo-shocked.gif?1500426362' width="40%"; alt=''></figure>
    <h3>Uhhhh Whaaaat??</h3>`,
    `<h2>GREAT JOB!<br>You're on your way to Music Trivia Master Status!<h2> 
    <figure><img src='https://discordemoji.com/assets/emoji/blobbongos.gif' width="40%"; alt='Excited Blobmoji'></figure>
    <h3>Come On! Again! Again! Again!</h3>`,
    `<h2>AWESOME!<br>You're a Music Trivia Master-in-Training!<h2> 
    <figure><img src='https://emojis.slackmojis.com/emojis/images/1531849430/4246/blob-sunglasses.gif?1531849430' width="50%"; alt='Cool Shades Blobmoji'></figure>
    <h3>Yeah...I'm STILL better than you!</h3>`,
    `<h2>CONGRATULATIONS!<br>You're a Music Trivia Master!<h2> 
    <figure><img src='https://discordemoji.com/assets/emoji/BlobRave.gif' width="50%"; alt='Neon Dancing Blobmoji'></figure>
    <h3>Let's Go. PARTY TIME!!</h3>`
  ],

  trivia: [
    {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Who is the lead singer of Pearl Jam?',
      'correct_answer': 'Eddie Vedder',
      'answers': ['Ozzy Osbourne', 'Stone Gossard', 'Eddie Vedder', 'Kurt Cobain']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Ringo Starr of The Beatles mainly played what instrument?',
      'correct_answer': 'Drums',
      'answers': ['Bass', 'Guitar', 'Drums', 'Piano']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'What is the best selling album of all time from 1976 to 2018?',
      'correct_answer': 'Thriller',
      'answers': ['Back in Black', 'Abbey Road', 'The Dark Side of the Moon', 'Thriller']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which country does the band Rammstein hail from?',
      'correct_answer': 'Germany',
      'answers': ['Germany', 'Austria', 'Armenia', 'Belgium']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which of these songs by Skrillex features Fatman Scoop as a side artist?',
      'correct_answer': 'Recess',
      'answers': ['All is Fair in Love and Brostep', 'Recess', 'Rock N Roll (Will Take You to the Mountain)', 'Scary Monsters and Nice Sprites']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'What is the name of Finnish DJ Darude&#039;s hit single released in October 1999?',
      'correct_answer': 'Sandstorm',
      'answers': ['Dust Devil', 'Sandstorm', 'Sirocco', 'Khamsin']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'What was the name of singer Frank Ocean&#039;s second studio album, which was released on August 20, 2016?',
      'correct_answer': 'Blonde',
      'answers': ['Blonde', 'Brunette', 'Black', 'Burgundy']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which artist released the 2012 single &quot;Harlem Shake&quot;, which was used in numerous YouTube videos in 2013?',
      'correct_answer': 'Baauer',
      'answers': ['RL Grime', 'NGHTMRE', 'Baauer', 'Flosstradamus']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which of these is NOT the name of an album released by English singer-songwriter Adele?',
      'correct_answer': '12',
      'answers': ['19', '12', '21', '25']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'In Mean Girls, who has breasts that tell when it&#039;s raining?',
      'correct_answer': 'Karen Smith',
      'answers': ['Gretchen Weiners', 'Janice Ian', 'Cady Heron', 'Karen Smith']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which Beatles album does NOT feature any of the band members on it&#039;s cover?',
      'correct_answer': 'The Beatles (White Album)',
      'answers': ['Rubber Soul', 'Abbey Road', 'The Beatles (White Album)', 'Magical Mystery Tour']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which band released songs suchs as &quot;Rio&quot;, &quot;Girls on Film&quot;, and &quot;The Reflex&quot;?',
      'correct_answer': 'Duran Duran',
      'answers': ['Duran Duran', 'The Cure', 'New Order', 'Depeche Mode']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which one of these songs did the group &quot;Men At Work&quot; NOT make?',
      'correct_answer': 'Safety Dance',
      'answers': ['Down Under', 'Who Can It Be Now?', 'Safety Dance', 'It&#039;s a Mistake']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'From which country did the song &quot;Gangnam Style&quot; originate from?',
      'correct_answer': 'South Korea',
      'answers': ['Japan', 'South Korea', 'North Korea', 'China']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which 80s band is fronted by singer/guitarist Robert Smith?',
      'correct_answer': 'The Cure',
      'answers': ['The Cure', 'The Smiths', 'Echo &amp; the Bunnymen', 'New Order']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which Disney character sings the song &quot;A Dream is a Wish Your Heart Makes&quot;?',
      'correct_answer': 'Cinderella',
      'answers': ['Belle', 'Snow White', 'Pocahontas', 'Cinderella']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Kanye West&#039;s &quot;Gold Digger&quot; featured which Oscar-winning actor?',
      'correct_answer': 'Jamie Foxx',
      'answers': ['Alec Baldwin', 'Jamie Foxx', 'Dwayne Johnson', ' Bruce Willis']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'In 2006, which band released their debut album &quot;A Fever You Can&#039;t Sweat Out&quot;?',
      'correct_answer': 'Panic! At the Disco',
      'answers': ['Panic! At the Disco', 'Twenty One Pilots', 'My Chemical Romance', 'Fall Out Boy']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Who was featured in the song &quot;Words&quot; by Feint? ',
      'correct_answer': 'Laura Brehm',
      'answers': ['Anna Yvette ', 'Danyka Nadeau', 'Veela', 'Laura Brehm']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'What was Daft Punk&#039;s first studio album?',
      'correct_answer': 'Homework',
      'answers': ['Discovery', 'Homework', 'Random Access Memories', 'Human After All']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'When was Gangnam Style uploaded to YouTube?',
      'correct_answer': '2012',
      'answers': ['2013', '2014', '2011', '2012']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'What is the frontman&#039;s name of the metal band Megadeth?',
      'correct_answer': 'Dave Mustaine',
      'answers': ['Dave Mustaine', 'Rob Halford', 'Vince Neil', 'James Hetfield']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'The &quot;British Invasion&quot; was a cultural phenomenon in music where British boy bands became popular in the USA in what decade?',
      'correct_answer': '60&#039;s',
      'answers': ['50&#039;s', '40&#039;s', '60&#039;s', '30&#039;s']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which punk rock band released hit songs such as &quot;Californication&quot;, &quot;Can&#039;t Stop&quot; and &quot;Under the Bridge&quot;?',
      'correct_answer': 'Red Hot Chilli Peppers',
      'answers': ['Green Day', 'Linkin Park', 'Red Hot Chilli Peppers', 'Foo Fighters']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Who was &quot;Kung Fu Fighting&quot; in 1974?',
      'correct_answer': 'Carl Douglas',
      'answers': ['The Bee Gees', 'Carl Douglas', 'Heatwave', 'Kool &amp; the Gang']
    }
  ]
};