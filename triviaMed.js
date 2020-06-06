/* eslint-disable no-unused-vars */
'use strict';

const STORE = {
  quizStarted: false,
  questionNumber: 0,
  correctAnswer: 0,
  incorrectAnswer: 0,
  totalQuestions: 5
  difficulty: 'medium',

  trivia: [
    {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'What French artist\/band is known for playing on the midi instrument &quot;Launchpad&quot;?',
      'correct_answer': 'Madeon',
      'answers': ['Daft Punk', 'Madeon', 'Disclosure', 'David Guetta']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which band had hits in 1972 with the songs &quot;Baby I&#039;m A Want You&quot;, &quot;Everything I Own&quot; and &quot;The Guitar Man&quot;',
      'correct_answer': 'Bread',
      'answers': ['America', 'Chicago', 'Smokie', 'Bread']
    },
    {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Who is the best selling artist of all time?',
      'correct_answer': 'The Beatles',
      'answers': ['Michael Jackson', 'Elton John', 'The Beatles', 'Elvis Presley']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which band had hits in 1975 with the songs, &#039;One Of These Nights&#039; &amp; &#039;Lyin Eyes&#039;?',
      'correct_answer': 'The Eagles',
      'answers': ['Fools Gold', 'The Eagles', 'The Doobie Brothers', 'Fleetwood Mac']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'What was the title of ABBA`s first UK hit single?',
      'correct_answer': 'Waterloo',
      'answers': ['Mamma Mia', 'Waterloo', 'Fernando', 'Dancing Queen']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Who is the primary lyricist for Canadian progressive rock band Rush?',
      'correct_answer': 'Neil Peart',
      'answers': ['Geddy Lee', 'Alex Lifeson', 'John Rutsey', 'Neil Peart']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which Beatle led the way across the zebra crossing on the Abbey Road album cover?',
      'correct_answer': 'John',
      'answers': ['Paul', 'George', 'John', 'Ringo']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Who wrote the musical composition, &quot;Rhapsody In Blue&quot;?',
      'correct_answer': 'George Gershwin',
      'answers': ['George Gershwin', 'Irving Berlin', 'Duke Ellington', 'Johnny Mandel']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which singer was featured in Swedish producer Avicii&#039;s song &quot;Wake Me Up&quot;?',
      'correct_answer': 'Aloe Blacc',
      'answers': ['John Legend', 'CeeLo Green', 'Aloe Blacc', 'Pharrell Williams']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Irish musician Hozier released a music track in 2013 titled, &quot;Take Me to ______&quot;',
      'correct_answer': 'Church',
      'answers': ['Mosque', 'Church', 'Synagogue', 'Temple']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which band released songs such as &quot;Electric Feel&quot;, &quot;Kids&quot;, and &quot;Time to Pretend&quot;?',
      'correct_answer': 'MGMT',
      'answers': ['Passion Pit', 'Phoenix', 'Franz Ferdinand',  'MGMT']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'What genre of EDM is the Dutch DJ, musician, and remixer Armin van Buuren most well-known for?',
      'correct_answer': 'Trance',
      'answers': ['House', 'Drum and Bass', 'Trance', 'Dubstep']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which song is not by TheFatRat?',
      'correct_answer': 'Ascent',
      'answers': ['Monody', 'Ascent', 'Windfall', 'Infinite Power!']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'In 2015, David Hasselhof released a single called...',
      'correct_answer': 'True Survivor',
      'answers': ['True Survivor', 'True Fighter', 'Real Kung-Fury', 'Real Warrior']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which one of these artists appears in the album Deltron 3030?',
      'correct_answer': 'Dan the Automater',
      'answers': ['Lamarr Kendrick', 'Danger Mouse', 'Dan the Automater', 'CeeLo Green']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'EDM producer Marshmello performs live wearing clothes and a marshmallow mask of what colour?',
      'correct_answer': 'White',
      'answers': ['Black', 'White', 'Blue', 'Yellow']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Madonna&#039;s song &quot;Hung Up&quot; includes a piece from which popular 70s song?',
      'correct_answer': 'Gimmie! Gimmie! Gimme! (A Man After Midnight)',
      'answers': ['Staying Alive', 'Night Fever', 'The Chain', 'Gimmie! Gimmie! Gimme! (A Man After Midnight)']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which Toronto landmark was featured on the cover art of Canadian rapper Drake&#039;s 2016 album &quot;Views&quot;?',
      'correct_answer': 'CN Tower',
      'answers': ['Allan Gardens', 'Union Station', 'CN Tower', 'Prince of Wales Theatre']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Who is the lead singer of Silverchair?',
      'correct_answer': 'Daniel Johns',
      'answers': ['Ben Gillies', 'Daniel Johns', 'Chris Joannou', 'George Costanza']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'The 1952 musical composition 4&#039;33&quot;, composed by prolific American composer John Cage, is mainly comprised of what sound?',
      'correct_answer': 'Silence',
      'answers': ['Farts', 'People talking', 'Silence', 'Cricket chirps']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'What animal is featured on the cover of English electronic music group The Prodigy&#039;s album, &quot;The Fat of the Land&quot;?',
      'correct_answer': 'Crab',
      'answers': ['Fox', 'Crab', 'Elephant', 'Tiger']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which one of these Rammstein songs has two official music videos?',
      'correct_answer': 'Du Riechst So Gut',
      'answers': ['Du Hast', 'Benzin', 'Mein Teil', 'Du Riechst So Gut']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'May 16th of every year is known as __________ Day, named after a punk band prominent in the 1990s.',
      'correct_answer': 'Lagwagon',
      'answers': ['Goldfinger', 'Less Than Jake', 'Lagwagon', 'Lit']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'What is the name of the 2016 studio album by the French electronic music duo Justice?',
      'correct_answer': 'Woman',
      'answers': [ 'Woman','Randy', 'Safe and Sound', 'Pleasure']
    }, {
      'category': 'Entertainment: Music',
      'type': 'multiple',
      'difficulty': 'medium',
      'question': 'Which of these is NOT a name of an album released by American rapper Pitbull?',
      'correct_answer': 'Welcome to Miami',
      'answers': ['Dale', 'Global Warming', 'Welcome to Miami', 'Armando']
    }
  ]
};