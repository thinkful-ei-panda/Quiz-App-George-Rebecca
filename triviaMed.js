/* eslint-disable no-unused-vars */

const STOREMED = {
  quizStarted: false,
  questionNumber: 0,
  correct: 0,
  incorrect: 0,
  totalQuestions: 5,
  difficulty: 'medium',

  message: [
    `<h2>Well...I wouldn't quit your day job just yet.<br>Please come back when your eyes aren't leaking and try again!<h2> 
    <figure><img src='https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Crying_200px.gif'  class='emoji' alt=''></figure>
    <h3>*Sobbing Hysterically*</h3>`,
    `<h2>Hmmm. Atleast you got 1 right!<br>You may be hangry and need a snack. Come back and try again!<h2> 
    <figure><img src='https://discordemoji.com/assets/emoji/blobshake.gif'  class='emoji' alt=''></figure>
    <h3>Aaaggghhh %@*?&$#!</h3>`,
    `<h2>NICE TRY!<br>Keep practicing and one day you could be a Music Trivia Master!<h2> 
    <figure><img src='https://emojis.slackmojis.com/emojis/images/1500426362/2651/allo-shocked.gif?1500426362'  class='emoji' alt=''></figure>
    <h3>Uhhhh Whaaaat??</h3>`,
    `<h2>GREAT JOB!<br>You're on your way to Music Trivia Master Status!<h2> 
    <figure><img src='https://discordemoji.com/assets/emoji/blobbongos.gif'  class='emoji' alt='Excited Blobmoji'></figure>
    <h3>Come On! Again! Again! Again!</h3>`,
    `<h2>AWESOME!<br>You're a Music Trivia Master-in-Training!<h2> 
    <figure><img src='https://emojis.slackmojis.com/emojis/images/1531849430/4246/blob-sunglasses.gif?1531849430'  class='emoji' alt='Cool Shades Blobmoji'></figure>
    <h3>Yeah...I'm STILL better than you!</h3>`,
    `<h2>CONGRATULATIONS!<br>You're a Music Trivia Master!<h2> 
    <figure><img src='https://discordemoji.com/assets/emoji/BlobRave.gif'  class='emoji' alt='Neon Dancing Blobmoji'></figure>
    <h3>Let's Go. PARTY TIME!!</h3>`
  ],

  trivia: [
    {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Who had a 1973 hit with the song &#039;Hocus Pocus&#039;?',
      'correct_answer': 'Focus',
      'incorrect_answers': ['Pilot', 'Rush', 'AC/DC']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which band had hits in 1972 with the songs &quot;Baby I&#039;m A Want You&quot;, &quot;Everything I Own&quot; and &quot;The Guitar Man&quot;',
      'correct_answer': 'Bread',
      'incorrect_answers': ['America', 'Chicago', 'Smokie']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Who is the best selling artist of all time?',
      'correct_answer': 'The Beatles',
      'incorrect_answers': ['Michael Jackson', 'Elton John', 'Elvis Presley']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which band had hits in 1975 with the songs, &#039;One Of These Nights&#039; &amp; &#039;Lyin Eyes&#039;?',
      'correct_answer': 'The Eagles',
      'incorrect_answers': ['Fools Gold', 'The Doobie Brothers', 'Fleetwood Mac']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which American family band had a 1986 top 10 hit with the song &#039;Crush On You&#039;?',
      'correct_answer': 'The Jets',
      'incorrect_answers': ['DeBarge', 'The Jacksons', 'The Cover Girls']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'According to their 1974 hit, what were Brownsville Station doing &quot;In The Boys&#039; Room&quot;?',
      'correct_answer': 'Smokin&#039;',
      'incorrect_answers': ['Hangin&#039;', 'Lovin&#039;', 'Peein&#039;']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Who is the founder and leader of industrial rock band, &#039;Nine Inch Nails&#039;?',
      'correct_answer': 'Trent Reznor',
      'incorrect_answers': ['Marilyn Manson', 'Robin Finck', 'Josh Homme']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Typically, how many keys are on a piano?',
      'correct_answer': '88',
      'incorrect_answers': ['24', '12', '96']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which of these is NOT an album released by The Beatles?',
      'correct_answer': 'The Wall',
      'incorrect_answers': ['Abbey Road', 'Magical Mystery Tour', 'Revolver']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Saul Hudson (Slash) of the band Guns N\' Roses is known for playing what type of guitar?',
      'correct_answer': 'Les Paul Standard',
      'incorrect_answers': ['Fender Stratocaster', 'LsL Mongrel', 'Gretsch Falcon']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Who is the Pink Floyd song &quot;Shine On You Crazy Diamond&quot; written about?',
      'correct_answer': 'Syd Barrett',
      'incorrect_answers': ['John Lennon', 'David Gilmour', 'Floyd']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Who wrote the musical composition, &quot;Rhapsody In Blue&quot;?',
      'correct_answer': 'George Gershwin',
      'incorrect_answers': ['Irving Berlin', 'Duke Ellington', 'Johnny Mandel']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Irish musician Hozier released a music track in 2013 titled, &quot;Take Me to ______&quot;',
      'correct_answer': 'Church',
      'incorrect_answers': ['Mosque', 'Synagogue', 'Temple']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which song is not by TheFatRat?',
      'correct_answer': 'Ascent',
      'incorrect_answers': ['Monody', 'Windfall', 'Infinite Power!']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'In 2015, David Hasselhof released a single called...',
      'correct_answer': 'True Survivor',
      'incorrect_answers': ['True Fighter', 'Real Kung-Fury', 'Real Warrior']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'In which city did American rap producer DJ Khaled originate from?',
      'correct_answer': 'Miami',
      'incorrect_answers': ['New York', 'Detroit', 'Atlanta']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which of these artists has NOT been a member of dancehall group Major Lazer?',
      'correct_answer': 'Skrillex',
      'incorrect_answers': ['Diplo', 'Jillionaire', 'Walshy Fire']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'What\'s the most common time signature for rock songs?',
      'correct_answer': '4/4',
      'incorrect_answers': ['1/2', '8/12', '2/4']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which of these is the name of an American psychedelic rock band formed in 2002 by Benjamin Goldwasser and Andrew VanWyngarden?',
      'correct_answer': 'MGMT',
      'incorrect_answers': ['MSTRKRFT', 'STRFKR', 'SBTRKT']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which one of these Pink Floyd albums were also a movie?',
      'correct_answer': 'The Wall',
      'incorrect_answers': ['The Dark Side of the Moon', 'Wish You Were Here', 'Animals']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Johnny Cash did a cover of this song written by lead singer of Nine Inch Nails, Trent Reznor.',
      'correct_answer': 'Hurt',
      'incorrect_answers': ['Closer', 'A Warm Place', 'Big Man with a Gun']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which country does the power metal band "Sabaton" originate from?',
      'correct_answer': 'Sweden',
      'incorrect_answers': ['Germany', 'United States', 'Finland']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'What is the name of French electronic music producer Madeon&#039;s 2015 debut studio album?',
      'correct_answer': 'Adventure',
      'incorrect_answers': ['The City', 'Icarus', 'Pop Culture']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'What musician made the song "Fuckin` Perfect" in 2010?',
      'correct_answer': 'P!nk',
      'incorrect_answers': ['Mitis', 'Adam lambert', 'Koven']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'What was Radiohead\'s first album?',
      'correct_answer': 'Pablo Honey',
      'incorrect_answers': ['The Bends', 'Kid A', 'A Moon Shaped Pool']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'When did The Beatles release the LP &quot;Please Please Me&quot;?',
      'correct_answer': '1963',
      'incorrect_answers': ['1970', '1960', '1969']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'What year was Red Hot Chill Pepper\'s album &quot;Californication&quot; released?',
      'correct_answer': '1999',
      'incorrect_answers': ['1997', '2000', '1992']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': '&quot;Drink the Sea&quot; is an album by which electronic music artist?',
      'correct_answer': 'The Glitch Mob',
      'incorrect_answers': ['Avicii', 'XXYYXX', 'Flux Pavilion']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'In what film was the Michael Jackson song &quot;Will You Be There&quot; featured?',
      'correct_answer': 'Free Willy',
      'incorrect_answers': ['Sleepless in Seattle', 'Men in Black', 'Bad Boys']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'What is the first track on Kanye West\'s 808s & Heartbreak?',
      'correct_answer': 'Say You Will',
      'incorrect_answers': ['Welcome to Heartbreak', 'Street Lights', 'Heartless']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which of these is NOT a song by Pegboard Nerds?',
      'correct_answer': 'WiFi Tears',
      'incorrect_answers': ['Swamp Thing', 'Emoji', 'BAMF']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which rapper had an album that went double platinum with no features?',
      'correct_answer': 'J. Cole',
      'incorrect_answers': ['Kendrick Lamar', 'Drake', 'Big Sean']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Who is the vocalist and frontman of rock band &quot;Guns N&#039; Roses&quot;?',
      'correct_answer': 'Axl Rose',
      'incorrect_answers': ['Kurt Cobain', 'Slash', 'Bono']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which rock band released the album &quot;The Bends&quot; in March 1995?',
      'correct_answer': 'Radiohead',
      'incorrect_answers': ['Nirvana', 'Coldplay', 'U2']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'What was David Bowie&#039;s real surname?',
      'correct_answer': 'Jones',
      'incorrect_answers': ['Johnson', 'Edwards', 'Carter']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Who was the lead singer and frontman of rock band R.E.M?',
      'correct_answer': 'Michael Stipe',
      'incorrect_answers': ['Chris Martin', 'Thom Yorke', 'George Michael']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Moby, an American DJ, singer, and musician, achieved worldwide success for the 1999 release of which of the following albums?',
      'correct_answer': 'Play',
      'incorrect_answers': ['Everything Is Wrong', 'Moby', '18']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which artist or group did John Lennon consider &quot;son(s) of the Beatles&quot;?',
      'correct_answer': 'Jeff Lynne&#039;s Electric Light Orchestra',
      'incorrect_answers': ['The Rolling Stones', 'Pink Floyd', 'The Who']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which album by American rapper Kanye West contained songs such as &quot;Love Lockdown&quot;, &quot;Paranoid&quot; and &quot;Heartless&quot;?',
      'correct_answer': '808s &amp; Heartbreak',
      'incorrect_answers': ['Late Registration', 'The Life of Pablo', 'Graduation']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'In which year was the Megadeth album &quot;Peace Sells... but Who&#039;s Buying?&quot; released?',
      'correct_answer': '1986',
      'incorrect_answers': ['1979', '1987', '1983']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'From which country does the piano originate?',
      'correct_answer': 'Italy',
      'incorrect_answers': ['Germany', 'Austria', 'France']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Liam Howlett founded which electronic music group in 1990?',
      'correct_answer': 'The Prodigy',
      'incorrect_answers': ['The Chemical Brothers', 'The Crystal Method', 'Infected Mushroom']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Who released the 1991 album &quot;Out of Time&quot;?',
      'correct_answer': 'R.E.M.',
      'incorrect_answers': ['U2', 'Coldplay', 'The Rolling Stones']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'What date is referenced in the 1971 song &quot;September&quot; by Earth, Wind &amp; Fire?',
      'correct_answer': '21st of September',
      'incorrect_answers': ['26th of September', '23rd of September', '24th of September']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': '&#039;74&ndash;&#039;75 is a 1993 single from the album Ring by what American band?',
      'correct_answer': 'The Connells',
      'incorrect_answers': ['R.E.M.', 'The Ocean Blue', 'The Bangles']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which song previously recorded by Elvis Presley was covered by UB40 with a reggae beat?',
      'correct_answer': 'Can&#039;t Help Falling in Love',
      'incorrect_answers': ['Jailhouse Rock', 'In the Ghetto', 'Wooden Heart']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which song made by MAN WITH A MISSION was used as the opening for the anime &quot;Log Horizon&quot;?',
      'correct_answer': '&quot;Database&quot;',
      'incorrect_answers': ['&quot;Dead End in Tokyo&quot;', '&quot;Raise Your Flag&quot;', '&quot;Out of Control&quot;']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which artist curated the official soundtrack for &quot;The Hunger Games: Mockingjay - Part 1&quot;?',
      'correct_answer': 'Lorde',
      'incorrect_answers': ['Kanye West', 'Tove Lo', 'Charli XCX']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'What is the opening track on Lorde&#039;s Pure Heroine?',
      'correct_answer': 'Tennis Court',
      'incorrect_answers': ['Team', 'Royals', '400 Lux']
    }
  ]
};