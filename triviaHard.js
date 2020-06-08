/* eslint-disable no-unused-vars */

const STOREHARD = {
  quizStarted: false,
  questionNumber: 0,
  correct: 0,
  incorrect: 0,
  totalQuestions: 5,
  difficulty: 'hard',

  message: [
    `<h2>Well...I wouldn't quit your day job just yet.<br>Please come back when your eyes aren't leaking and try again!<h2> 
    <figure><img src='https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Crying_200px.gif' class='emoji' alt=''></figure>
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
      'difficulty': 'hard',
      'question': 'On which Beatles album would you find the song &#039;Eleanor Rigby&#039;?',
      'correct_answer': 'Revolver',
      'incorrect_answers': ['Help!', 'Rubber Soul', 'Abbey Road']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Which Elton John hit starts with the line &quot;When are you gonna come down&quot;?',
      'correct_answer': 'Goodbye Yellow Brick Road',
      'incorrect_answers': ['Rocket Man', 'Bennie and the Jets', 'Crocodile Rock']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Who recorded the 1975 album &#039;Captain Fantastic and the Brown Dirt Cowboy&#039;?',
      'correct_answer': 'Elton John',
      'incorrect_answers': ['John Denver', 'Billy Joel', 'Joe Cocker']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'What was the last Aphex Twin album released before his decade-long hiatus?',
      'correct_answer': 'Drukqs',
      'incorrect_answers': ['Windowlicker', 'Syro', 'Collected Ambient Works 85-92']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Which of these songs was released in 1996?',
      'correct_answer': 'The Smashing Pumpkins - &quot;1979&quot;',
      'incorrect_answers': ['Prince - &quot;1999&quot;', 'James Blunt - &quot;1973&quot;', 'David Bowie - &quot;1984&quot;']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Who was the original drummer for The Beatles?',
      'correct_answer': 'Tommy Moore',
      'incorrect_answers': ['Ringo Starr', 'Stuart Sutcliffe', 'Pete Best']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Who had a 1981 hit with the song &quot;Japanese Boy&quot;?',
      'correct_answer': 'Aneka',
      'incorrect_answers': ['Toyah', 'Sandra', 'Madonna']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Which member of the English band &quot;The xx&quot; released their solo album &quot;In Colour&quot; in 2015?',
      'correct_answer': 'Jamie xx',
      'incorrect_answers': ['Romy Madley Croft', 'Oliver Sim', 'Baria Qureshi']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Which song in rapper Kanye West&#039;s album &quot;The Life of Pablo&quot; features Rihanna?',
      'correct_answer': 'Famous',
      'incorrect_answers': ['Wolves', 'Ultralight Beam', 'Highlights']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Which M83 album is the song &quot;Midnight City&quot; featured in?',
      'correct_answer': 'Hurry Up, We&#039;re Dreaming',
      'incorrect_answers': ['Saturdays = Youth', 'Before the Dawn Heals Us', 'Junk']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Who was not in the band &quot;The Smiths&quot;?',
      'correct_answer': 'Martin Chambers',
      'incorrect_answers': ['Morrissey', 'Andy Rourke', 'Mike Joyce']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'How many members are there in the idol group &quot;&micro;&#039;s&quot;?',
      'correct_answer': '9',
      'incorrect_answers': ['48', '6', '3']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Which of these artists did NOT remix the song &quot;Faded&quot; by Alan Walker?',
      'correct_answer': 'Skrillex',
      'incorrect_answers': ['Ti&euml;sto', 'Slushii', 'Dash Berlin']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'What is the name of the 2016 mixtape released by Venezuelan electronic producer Arca?',
      'correct_answer': 'Entra&ntilde;as',
      'incorrect_answers': ['&amp;&amp;&amp;&amp;&amp;&amp;', 'Sheep', 'Xen']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'What is the British term for a 64th note?',
      'correct_answer': 'Hemidemisemiquaver',
      'incorrect_answers': ['Semihemidemisemiquaver', 'Semiquaver', 'Demisemiquaver']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Who won the 1989 Drum Corps International championships?',
      'correct_answer': 'Santa Clara Vanguard',
      'incorrect_answers': ['Blue Devils', 'The Academy', 'The Bluecoats']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Which band is the longest active band in the world with no breaks or line-up changes?',
      'correct_answer': 'U2',
      'incorrect_answers': ['Radiohead', 'Rush', 'Rolling Stones']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Which of these is NOT a song featured on the Lockjaw EP released in 2013 by Flume &amp; Chet Faker?',
      'correct_answer': 'Left Alone',
      'incorrect_answers': ['What About Us', 'This Song Is Not About A Girl', 'Drop The Game']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Which of the following is NOT a real song from the band Thousand Foot Krutch?',
      'correct_answer': 'Limitless Fury',
      'incorrect_answers': ['Let The Sparks Fly', 'Down', 'Give Up The Ghost']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Which of these songs is not by Tatsuro Yamashita?',
      'correct_answer': 'Lucky Lady Feel So Good ',
      'incorrect_answers': ['Merry-Go Round', 'Let&#039;s Dance Baby', 'Love Talkin&#039;']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'What year was Huun Huur Tu&#039;s album Altai Sayan Tandy-Uula released? ',
      'correct_answer': '2004',
      'incorrect_answers': ['1993', '2006', '2010']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Which of these songs is NOT included in the Suicide Squad OST?',
      'correct_answer': 'Skies on Fire - AC/DC',
      'incorrect_answers': ['Heathens - Twenty One Pilots', 'Without Me - Eminem', 'Fortunate Son - Creedence Clearwater Revival']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'The key of sharps does the key of G# minor contain?',
      'correct_answer': '5',
      'incorrect_answers': ['3', '7', '0']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Which year was the album &quot;Floral Shoppe&quot; by Macintosh Plus released?',
      'correct_answer': '2011',
      'incorrect_answers': ['2014', '2013', '2012']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'This album, now considered to be one of the greatest of all time, was a commercial failure when it was released.',
      'correct_answer': 'The Velvet Underground and Nico',
      'incorrect_answers': ['Abbey Road', 'Led Zeppelin IV', 'Pet Sounds']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Who designed the album cover for True Romance, an album by Estelle?',
      'correct_answer': 'Rebecca Sugar',
      'incorrect_answers': ['Matt Burnett', 'Ian Jones Quartey', 'Ben Leven']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Which album was released by Kanye West in 2013?',
      'correct_answer': 'Yeezus',
      'incorrect_answers': ['My Beautiful Dark Twisted Fantasy', 'The Life of Pablo', 'Watch the Throne']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': '&quot;All the Boys&quot; by Panic! At the Disco was released as a bonus track on what album?',
      'correct_answer': 'Too Weird To Live, Too Rare To Die!',
      'incorrect_answers': ['A Fever You Can&#039;t Sweat Out', 'Death Of A Bachelor', 'Vices &amp; Virtues']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'In the Panic! At the Disco&#039;s song &quot;Nothern Downpour&quot;, which lyric follows &#039;I know the world&#039;s a broken bone&#039;.',
      'correct_answer': '&quot;So melt your headaches call it home&quot;',
      'incorrect_answers': ['&quot;So sing your song until you&#039;re home&quot;', '&quot;So let them know they&#039;re on their own&quot;', '&quot;So start a fire in their cold stone&quot;']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'What is the name of the song by Beyonc&eacute; and Alejandro Fern&aacute;ndez released in 2007?',
      'correct_answer': 'Amor Gitano',
      'incorrect_answers': ['La ultima vez', 'Rocket', 'Hasta Dondes Estes']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Who wrote the song &quot;You Know You Like It&quot;?',
      'correct_answer': 'AlunaGeorge',
      'incorrect_answers': ['DJ Snake', 'Steve Aoki', 'Major Lazer']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Which company did the animation for Peter Gabriel&#039;s Video Sledgehammer (1986)?',
      'correct_answer': 'Aardman Animations',
      'incorrect_answers': ['HIT Entertainment', 'Illumination Entertainment', 'VIZ Media']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'What is the first Studio Album to be released on the Internet with a &quot;Pay-What-You-Want&quot; price?',
      'correct_answer': 'In Rainbows',
      'incorrect_answers': ['The Help Album', 'Skrillex and Diplo Present Jack &Uuml;', 'Blackstar']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'What year was Min Yoongi from South Korea boy band &quot;BTS&quot; born in?',
      'correct_answer': '1993',
      'incorrect_answers': ['1992', '1995', '1994']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'The heavy metal band Black Sabbath hail from which English city?',
      'correct_answer': 'Birmingham',
      'incorrect_answers': ['Manchester', 'London', 'Newcastle-Upon-Tyne']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'What was the name of the hip hop group Kanye West was a member of in the late 90s?',
      'correct_answer': 'The Go-Getters',
      'incorrect_answers': ['The Jumpers', 'The Kickstarters', 'The Beat-Busters']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'What is the stage name of New Zealand singer Phillipa &quot;Pip&quot; Brown?',
      'correct_answer': 'Ladyhawke',
      'incorrect_answers': ['Lorde', 'Kesha', 'Anika Moa']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Pete Townshend collaborated with which famous guitarist for an event at Brixton Academy in 1985?',
      'correct_answer': 'David Gilmour',
      'incorrect_answers': ['Jimmy Page', 'Mark Knopfler', 'Eric Clapton']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Electronic artists Boys Noize and Skrillex have collaborated and released tracks under what name?',
      'correct_answer': 'Dog Blood',
      'incorrect_answers': ['Jack &Uuml;', 'What So Not', 'Noisia']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Which lyric is about Red Hot Chili Peppers frontman Anthony Kiedis?',
      'correct_answer': '"A rainy Lithuanian / Is dancing as an Indian"',
      'incorrect_answers': ['"Fly away on, my zephyr / I feel it more than ever"', '"And I liked the dimple in your chin / Your pale blue eyes"', '"You used to be so warm and affectionate...but now you\'re quick to get into your regret"']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'What was the name of the cold-war singer who has a song in Grand Theft Auto IV, and a wall landmark in Moscow for his memorial?',
      'correct_answer': 'Viktor Tsoi',
      'incorrect_answers': ['Jimi Hendrix', 'Brian Jones', 'Vladimir Vysotsky']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Bj&ouml;rk&#039;s &quot;Unison&quot; contains a sample of which Oval song?',
      'correct_answer': 'Aero Deck',
      'incorrect_answers': ['Textuell', 'Panorama', 'Do While']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'What was the name of the rock band that Nobuo Uematsu formed that played songs from various Final Fantasy games?',
      'correct_answer': 'The Black Mages',
      'incorrect_answers': ['The Final Fantasies', 'The Espers', 'The Rock Summoners']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'What is the first track on the Dave Matthews Band album &quot;Before These Crowded Streets&quot;?',
      'correct_answer': 'Pantala Naga Pampa',
      'incorrect_answers': ['Stay (Wasting Time)', 'Rapunzel', 'Don&#039;t Drink The Water']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Chino Moreno is the lead singer of which alternative metal band?',
      'correct_answer': 'Deftones',
      'incorrect_answers': ['Tool', 'Korn', 'Type O Negative']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'What is the official name of Prince&#039;s backing band?',
      'correct_answer': 'The Revolution',
      'incorrect_answers': ['The Paupers', 'The Wailers', 'The Heartbreakers']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Pamina and Papageno are characters in what Mozart opera?',
      'correct_answer': 'The Magic Flute',
      'incorrect_answers': ['The Marriage of Figaro', 'The Impresario', 'The Goose of Cairo']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'What song originally performed by The Bee Gees in 1978 had a cover version by Steps 20 years later?',
      'correct_answer': 'Tragedy',
      'incorrect_answers': ['Night Fever', 'Stayin&#039; Alive', 'You Should Be Dancing']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Where was Nicki Minaj born?',
      'correct_answer': 'Trinidad and Tobago',
      'incorrect_answers': ['Haiti', 'Saint Lucia', 'Grenada']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'hard',
      'question': 'Who sings the rap song &quot;Secret Wars Part 1&quot;?',
      'correct_answer': 'The Last Emperor',
      'incorrect_answers': ['MC Frontalot', 'Busdriver', 'Masta Killa']
    }
  ]
};