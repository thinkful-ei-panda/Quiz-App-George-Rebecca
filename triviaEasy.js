/* eslint-disable no-unused-vars */

const STOREEASY = {
  quizStarted: false,
  questionNumber: 0,
  correct: 0,
  incorrect: 0,
  totalQuestions: 5,
  difficulty: 'easy',

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
      'difficulty': 'easy',
      'question': 'Which Canadian reggae musician had a 1993 hit with the song &#039;Informer&#039;?',
      'correct_answer': 'Snow',
      'incorrect_answers': ['Rain', 'Hail', 'Sleet']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Who wrote the Sinead O`Connor hit &#039;Nothing Compares 2 U&#039;?',
      'correct_answer': 'Prince',
      'incorrect_answers': ['Michael Jackson', 'Cameo', 'Rick James']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Who had a 1983 hit with the song &#039;Africa&#039;?',
      'correct_answer': 'Toto',
      'incorrect_answers': ['Foreigner', 'Steely Dan', 'Journey']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': '&quot;Some people call me the space cowboy&quot; is the first line from what song?',
      'correct_answer': 'The Joker',
      'incorrect_answers': ['Fandango', 'Take The Money and Run', 'Fly Like an Eagle']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which English guitarist has the nickname &quot;Slowhand&quot;?',
      'correct_answer': 'Eric Clapton',
      'incorrect_answers': ['Mark Knopfler', 'Jeff Beck', 'Jimmy Page']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Who is the lead singer of Pearl Jam?',
      'correct_answer': 'Eddie Vedder',
      'incorrect_answers': ['Ozzy Osbourne', 'Stone Gossard', 'Kurt Cobain']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Ringo Starr of The Beatles mainly played what instrument?',
      'correct_answer': 'Drums',
      'incorrect_answers': ['Bass', 'Guitar', 'Piano']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which singer was featured in Jack &Uuml; (Skrillex &amp; Diplo)&#039;s 2015 song &#039;Where Are &Uuml; Now&#039;?',
      'correct_answer': 'Justin Bieber',
      'incorrect_answers': ['Selena Gomez', 'Ellie Goulding', 'The Weeknd']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Who is the frontman of the band 30 Seconds to Mars?',
      'correct_answer': 'Jared Leto',
      'incorrect_answers': ['Gerard Way', 'Matthew Bellamy', 'Mike Shinoda']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Whose signature guitar technique is called the &quot;windmill&quot;?',
      'correct_answer': 'Pete Townshend',
      'incorrect_answers': ['Jimmy Page', 'Eddie Van Halen', 'Jimi Hendrix']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Who is the lead singer of the band Coldplay?',
      'correct_answer': 'Chris Martin',
      'incorrect_answers': ['Chris Isaak', 'Chris Wallace', 'Chris Connelly']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'How many members are there in the band Nirvana?',
      'correct_answer': 'Three',
      'incorrect_answers': ['Two', 'Four', 'Five']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which member of the Foo Fighters was previously the drummer for Nirvana?',
      'correct_answer': 'Dave Grohl',
      'incorrect_answers': ['Taylor Hawkins', 'Nate Mendel', 'Chris Shiflett']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'What is the name of the album released in 2014 by American band Maroon 5?',
      'correct_answer': 'V',
      'incorrect_answers': ['X', 'III', 'IV']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which of these songs by Skrillex features Fatman Scoop as a side artist?',
      'correct_answer': 'Recess',
      'incorrect_answers': ['All is Fair in Love and Brostep', 'Rock N Roll (Will Take You to the Mountain)', 'Scary Monsters and Nice Sprites']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'What is the name of Finnish DJ Darude&#039;s hit single released in October 1999?',
      'correct_answer': 'Sandstorm',
      'incorrect_answers': ['Dust Devil', 'Sirocco', 'Khamsin']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which Twitch streamer is the vocalist for Red Vox?',
      'correct_answer': 'Vinesauce',
      'incorrect_answers': ['The8BitDrummer', 'LIRIK', 'Sodapoppin']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Who is the lead singer of the British pop rock band Coldplay?',
      'correct_answer': 'Chris Martin',
      'incorrect_answers': ['Jonny Buckland', 'Guy Berryman', 'Will Champion']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which brass instrument has the lowest pitch in an orchestra?',
      'correct_answer': 'Tuba',
      'incorrect_answers': ['Trumpet', 'Saxophone', 'Trombone']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Brian May was the guitarist for which band?',
      'correct_answer': 'Queen',
      'incorrect_answers': ['Pink Floyd', 'Rolling Stones', 'The Doors']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'What is the stage name of English female rapper Mathangi Arulpragasam, who is known for the song &quot;Paper Planes&quot;?',
      'correct_answer': 'M.I.A.',
      'incorrect_answers': ['K.I.A.', 'C.I.A.', 'A.I.A.']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'What was Rage Against the Machine&#039;s debut album?',
      'correct_answer': 'Rage Against the Machine',
      'incorrect_answers': ['Evil Empire', 'Bombtrack', 'The Battle Of Los Angeles']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'In Mean Girls, who has breasts that tell when it&#039;s raining?',
      'correct_answer': 'Karen Smith',
      'incorrect_answers': ['Gretchen Weiners', 'Janice Ian', 'Cady Heron']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which Beatles album does NOT feature any of the band members on it&#039;s cover?',
      'correct_answer': 'The Beatles (White Album)',
      'incorrect_answers': ['Rubber Soul', 'Abbey Road', 'Magical Mystery Tour']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which band released songs suchs as &quot;Rio&quot;, &quot;Girls on Film&quot;, and &quot;The Reflex&quot;?',
      'correct_answer': 'Duran Duran',
      'incorrect_answers': ['The Cure', 'New Order', 'Depeche Mode']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which one of these songs did the group &quot;Men At Work&quot; NOT make?',
      'correct_answer': 'Safety Dance',
      'incorrect_answers': ['Down Under', 'Who Can It Be Now?', 'It&#039;s a Mistake']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Sting, the lead vocalist of The Police, primarily plays what instrument?',
      'correct_answer': 'Bass Guitar',
      'incorrect_answers': ['Drums', 'Guitar', 'Keyboards']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'In an orchestra, what is the lowest member of the brass family?',
      'correct_answer': 'Tuba',
      'incorrect_answers': ['Trombone', 'Contrabass', 'Bassoon']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'According to the American rapper Nelly, what should you do when its hot in here?',
      'correct_answer': 'Take off all your clothes',
      'incorrect_answers': ['Take a cool shower', 'Drink some water', 'Go skinny dipping']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'From which country did the song &quot;Gangnam Style&quot; originate from?',
      'correct_answer': 'South Korea',
      'incorrect_answers': ['Japan', 'North Korea', 'China']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which Nirvana album had a naked baby on the cover?',
      'correct_answer': 'Nevermind',
      'incorrect_answers': ['Bleach', 'In Utero', 'Incesticide']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which Disney character sings the song &quot;A Dream is a Wish Your Heart Makes&quot;?',
      'correct_answer': 'Cinderella',
      'incorrect_answers': ['Belle', 'Snow White', 'Pocahontas']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Kanye West&#039;s &quot;Gold Digger&quot; featured which Oscar-winning actor?',
      'correct_answer': 'Jamie Foxx',
      'incorrect_answers': ['Alec Baldwin', 'Dwayne Johnson', ' Bruce Willis']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'What album did The Lumineers release in 2016?',
      'correct_answer': 'Cleopatra',
      'incorrect_answers': ['Winter', 'The Lumineers', 'Tracks From The Attic']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'What was the best selling album of 2015?',
      'correct_answer': 'Adele, 25',
      'incorrect_answers': ['Fetty Wap, Fetty Wap', 'Taylor Swift, 1989', 'Justin Bieber, Purpose']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which song on Daft Punk&#039;s &quot;Random Access Memories&quot; features Pharrell Williams?',
      'correct_answer': 'Get Lucky',
      'incorrect_answers': ['Doin&#039; It Right', 'Instant Crush', 'The Game of Love']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Who performed &quot;I Took A Pill In Ibiza&quot;?',
      'correct_answer': 'Mike Posner',
      'incorrect_answers': ['Avicii', 'Robbie Williams', 'Harry Styles']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': '&quot;The Singing Cowboy&quot; Gene Autry is credited with the first recording for all but which classic Christmas jingle?',
      'correct_answer': 'White Christmas',
      'incorrect_answers': ['Frosty the Snowman', 'Rudolph the Red-Nosed Reindeer', 'Here Comes Santa Claus']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'When was Gangnam Style uploaded to YouTube?',
      'correct_answer': '2012',
      'incorrect_answers': ['2013', '2014', '2011']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which classical composer wrote the &quot;Moonlight Sonata&quot;?',
      'correct_answer': 'Ludvig Van Beethoven',
      'incorrect_answers': ['Chief Keef', 'Wolfgang Amadeus Mozart', 'Johannes Brahms']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which band recorded the album &quot;Parallel Lines&quot;?',
      'correct_answer': 'Blondie',
      'incorrect_answers': ['Paramore', 'Coldplay', 'The Police']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'The band Muse released their first album, Showbiz, in what year?',
      'correct_answer': '1999',
      'incorrect_answers': ['1998', '2000', '2001']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which group performs the song &quot;Crash into Me&quot;?',
      'correct_answer': 'Dave Matthews Band',
      'incorrect_answers': ['Phish', 'The Grateful Dead', 'Destiny&#039;s Child']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which of the following is not a studio album by the band Pink Floyd?',
      'correct_answer': 'Moving Pictures',
      'incorrect_answers': ['The Dark Side of the Moon', 'Wish You Were Here', 'Animals']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': '&quot;Doctor Jones&quot;, &quot;Turn Back Time&quot; and &quot;Barbie Girl&quot; were UK number ones for which Eurodance group?',
      'correct_answer': 'Aqua',
      'incorrect_answers': ['Vengaboys', 'Eiffel 65', 'Sash!']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'The &quot;British Invasion&quot; was a cultural phenomenon in music where British boy bands became popular in the USA in what decade?',
      'correct_answer': '60&#039;s',
      'incorrect_answers': ['50&#039;s', '40&#039;s', '30&#039;s']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'Which punk rock band released hit songs such as &quot;Californication&quot;, &quot;Can&#039;t Stop&quot; and &quot;Under the Bridge&quot;?',
      'correct_answer': 'Red Hot Chilli Peppers',
      'incorrect_answers': ['Green Day', 'Linkin Park', 'Foo Fighters']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'How many strings are there on a cello?',
      'correct_answer': '4',
      'incorrect_answers': ['5', '6', '8']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': 'What Led Zeppelin album contains &quot;Stairway to Heaven&quot;?',
      'correct_answer': 'Led Zeppelin IV',
      'incorrect_answers': ['Houses of the Holy', 'Physical Graffiti', 'Led Zeppelin III']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'easy',
      'question': '&quot;Hallelujah&quot; is a song written by which Canadian recording artist?',
      'correct_answer': 'Leonard Cohen',
      'incorrect_answers': ['Kory Lefkowits', 'Ryan Letourneau ', 'Justin Bieber ']
    }
  ]    
};