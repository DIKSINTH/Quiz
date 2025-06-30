import { Question, Category } from '../types/quiz';

export const categories: Category[] = [
  {
    id: 'science',
    name: 'Science',
    icon: 'Atom',
    description: 'Test your knowledge of physics, chemistry, and biology',
    color: 'bg-blue-500',
    totalQuestions: 10
  },
  {
    id: 'history',
    name: 'History',
    icon: 'Clock',
    description: 'Explore historical events and civilizations',
    color: 'bg-amber-500',
    totalQuestions: 10
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: 'Globe',
    description: 'Discover countries, capitals, and landmarks',
    color: 'bg-green-500',
    totalQuestions: 10
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: 'Trophy',
    description: 'Challenge yourself with sports trivia',
    color: 'bg-red-500',
    totalQuestions: 10
  },
  {
    id: 'technology',
    name: 'Technology',
    icon: 'Cpu',
    description: 'Modern tech, programming, and innovations',
    color: 'bg-purple-500',
    totalQuestions: 10
  },
  {
    id: 'literature',
    name: 'Literature',
    icon: 'BookOpen',
    description: 'Books, authors, and literary classics',
    color: 'bg-pink-500',
    totalQuestions: 10
  },
  {
    id: 'cinema',
    name: 'Cinema',
    icon: 'Film',
    description: 'Movies, actors, directors, and film history',
    color: 'bg-indigo-500',
    totalQuestions: 10
  },
  {
    id: 'cartoon',
    name: 'Cartoons',
    icon: 'Smile',
    description: 'Animated shows, characters, and animation studios',
    color: 'bg-orange-500',
    totalQuestions: 10
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: 'Calculator',
    description: 'Numbers, equations, and mathematical concepts',
    color: 'bg-teal-500',
    totalQuestions: 10
  },
  {
    id: 'health',
    name: 'Health & Medicine',
    icon: 'Heart',
    description: 'Medical knowledge, health facts, and wellness',
    color: 'bg-rose-500',
    totalQuestions: 10
  },
  {
    id: 'music',
    name: 'Music',
    icon: 'Music',
    description: 'Artists, songs, instruments, and music theory',
    color: 'bg-violet-500',
    totalQuestions: 10
  },
  {
    id: 'food',
    name: 'Food & Cooking',
    icon: 'ChefHat',
    description: 'Cuisine, recipes, ingredients, and culinary arts',
    color: 'bg-yellow-500',
    totalQuestions: 10
  }
];

export const questions: Question[] = [
  // Science Questions (existing)
  {
    id: 1,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    category: "science",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    category: "science",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "What is the speed of light in vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "299,792,458 m/s", "250,000 km/s"],
    correctAnswer: 2,
    category: "science",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Which organ in the human body produces insulin?",
    options: ["Liver", "Pancreas", "Kidney", "Heart"],
    correctAnswer: 1,
    category: "science",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    correctAnswer: 2,
    category: "science",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "What is the smallest unit of matter?",
    options: ["Molecule", "Atom", "Proton", "Electron"],
    correctAnswer: 1,
    category: "science",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "Which scientist developed the theory of evolution?",
    options: ["Albert Einstein", "Isaac Newton", "Charles Darwin", "Galileo Galilei"],
    correctAnswer: 2,
    category: "science",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    correctAnswer: 2,
    category: "science",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "How many bones are in the adult human body?",
    options: ["206", "208", "210", "212"],
    correctAnswer: 0,
    category: "science",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Brain", "Lungs", "Skin"],
    correctAnswer: 3,
    category: "science",
    difficulty: "easy"
  },

  // History Questions (existing)
  {
    id: 11,
    question: "In which year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    correctAnswer: 1,
    category: "history",
    difficulty: "easy"
  },
  {
    id: 12,
    question: "Who was the first person to walk on the moon?",
    options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
    correctAnswer: 1,
    category: "history",
    difficulty: "easy"
  },
  {
    id: 13,
    question: "Which ancient wonder of the world was located in Alexandria?",
    options: ["Hanging Gardens", "Lighthouse", "Colossus", "Mausoleum"],
    correctAnswer: 1,
    category: "history",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: 2,
    category: "history",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "In which year did the Berlin Wall fall?",
    options: ["1987", "1988", "1989", "1990"],
    correctAnswer: 2,
    category: "history",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Which empire was ruled by Julius Caesar?",
    options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
    correctAnswer: 1,
    category: "history",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "Who was the first President of the United States?",
    options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
    correctAnswer: 2,
    category: "history",
    difficulty: "easy"
  },
  {
    id: 18,
    question: "Which war was fought between the North and South in America?",
    options: ["Revolutionary War", "Civil War", "World War I", "Spanish-American War"],
    correctAnswer: 1,
    category: "history",
    difficulty: "easy"
  },
  {
    id: 19,
    question: "In which year did the Titanic sink?",
    options: ["1910", "1911", "1912", "1913"],
    correctAnswer: 2,
    category: "history",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Who was the leader of Nazi Germany during World War II?",
    options: ["Heinrich Himmler", "Adolf Hitler", "Joseph Goebbels", "Hermann Göring"],
    correctAnswer: 1,
    category: "history",
    difficulty: "easy"
  },

  // Geography Questions (existing)
  {
    id: 21,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: 2,
    category: "geography",
    difficulty: "medium"
  },
  {
    id: 22,
    question: "Which is the longest river in the world?",
    options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
    correctAnswer: 1,
    category: "geography",
    difficulty: "easy"
  },
  {
    id: 23,
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    category: "geography",
    difficulty: "easy"
  },
  {
    id: 24,
    question: "Which country has the most natural lakes?",
    options: ["Russia", "Canada", "Finland", "Sweden"],
    correctAnswer: 1,
    category: "geography",
    difficulty: "medium"
  },
  {
    id: 25,
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: 1,
    category: "geography",
    difficulty: "easy"
  },
  {
    id: 26,
    question: "Which mountain range contains Mount Everest?",
    options: ["Andes", "Rocky Mountains", "Alps", "Himalayas"],
    correctAnswer: 3,
    category: "geography",
    difficulty: "easy"
  },
  {
    id: 27,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3,
    category: "geography",
    difficulty: "easy"
  },
  {
    id: 28,
    question: "Which desert is the largest in the world?",
    options: ["Sahara Desert", "Gobi Desert", "Kalahari Desert", "Arabian Desert"],
    correctAnswer: 0,
    category: "geography",
    difficulty: "easy"
  },
  {
    id: 29,
    question: "What is the capital of Brazil?",
    options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    correctAnswer: 2,
    category: "geography",
    difficulty: "medium"
  },
  {
    id: 30,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: 1,
    category: "geography",
    difficulty: "easy"
  },

  // Sports Questions (existing)
  {
    id: 31,
    question: "How many players are on a basketball team on the court at one time?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    category: "sports",
    difficulty: "easy"
  },
  {
    id: 32,
    question: "In which sport would you perform a slam dunk?",
    options: ["Tennis", "Basketball", "Volleyball", "Badminton"],
    correctAnswer: 1,
    category: "sports",
    difficulty: "easy"
  },
  {
    id: 33,
    question: "How often are the Summer Olympic Games held?",
    options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
    correctAnswer: 2,
    category: "sports",
    difficulty: "easy"
  },
  {
    id: 34,
    question: "Which country has won the most FIFA World Cups?",
    options: ["Germany", "Argentina", "Brazil", "Italy"],
    correctAnswer: 2,
    category: "sports",
    difficulty: "medium"
  },
  {
    id: 35,
    question: "In tennis, what does '15-love' mean?",
    options: ["15 points to 0", "15 games to 0", "First serve", "Break point"],
    correctAnswer: 0,
    category: "sports",
    difficulty: "easy"
  },
  {
    id: 36,
    question: "Which sport is played at Wimbledon?",
    options: ["Golf", "Tennis", "Cricket", "Rugby"],
    correctAnswer: 1,
    category: "sports",
    difficulty: "easy"
  },
  {
    id: 37,
    question: "How many holes are there in a standard golf course?",
    options: ["16", "18", "20", "22"],
    correctAnswer: 1,
    category: "sports",
    difficulty: "easy"
  },
  {
    id: 38,
    question: "Which athlete holds the world record for the 100m sprint?",
    options: ["Carl Lewis", "Usain Bolt", "Tyson Gay", "Asafa Powell"],
    correctAnswer: 1,
    category: "sports",
    difficulty: "medium"
  },
  {
    id: 39,
    question: "In which sport would you use a puck?",
    options: ["Baseball", "Ice Hockey", "Football", "Soccer"],
    correctAnswer: 1,
    category: "sports",
    difficulty: "easy"
  },
  {
    id: 40,
    question: "How many minutes are in a soccer match?",
    options: ["80", "90", "100", "120"],
    correctAnswer: 1,
    category: "sports",
    difficulty: "easy"
  },

  // Technology Questions (existing)
  {
    id: 41,
    question: "What does 'WWW' stand for?",
    options: ["World Wide Web", "World Wide Wait", "World Web Width", "World Wide Wall"],
    correctAnswer: 0,
    category: "technology",
    difficulty: "easy"
  },
  {
    id: 42,
    question: "Who founded Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
    correctAnswer: 1,
    category: "technology",
    difficulty: "easy"
  },
  {
    id: 43,
    question: "What does 'CPU' stand for?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Personal Unit", "Computer Processing Unit"],
    correctAnswer: 0,
    category: "technology",
    difficulty: "easy"
  },
  {
    id: 44,
    question: "Which programming language is known as the 'language of the web'?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: 2,
    category: "technology",
    difficulty: "medium"
  },
  {
    id: 45,
    question: "What does 'AI' stand for?",
    options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Intelligence", "Automated Information"],
    correctAnswer: 1,
    category: "technology",
    difficulty: "easy"
  },
  {
    id: 46,
    question: "Which company developed the iPhone?",
    options: ["Samsung", "Google", "Apple", "Microsoft"],
    correctAnswer: 2,
    category: "technology",
    difficulty: "easy"
  },
  {
    id: 47,
    question: "What does 'HTML' stand for?",
    options: ["Hypertext Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hypertext Machine Language"],
    correctAnswer: 0,
    category: "technology",
    difficulty: "medium"
  },
  {
    id: 48,
    question: "Which social media platform is known for its 280-character limit?",
    options: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
    correctAnswer: 2,
    category: "technology",
    difficulty: "easy"
  },
  {
    id: 49,
    question: "What does 'USB' stand for?",
    options: ["Universal Serial Bus", "Universal System Bus", "United Serial Bus", "Universal Storage Bus"],
    correctAnswer: 0,
    category: "technology",
    difficulty: "easy"
  },
  {
    id: 50,
    question: "Which company owns YouTube?",
    options: ["Facebook", "Google", "Microsoft", "Amazon"],
    correctAnswer: 1,
    category: "technology",
    difficulty: "easy"
  },

  // Literature Questions (existing)
  {
    id: 51,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1,
    category: "literature",
    difficulty: "easy"
  },
  {
    id: 52,
    question: "Which book begins with 'Call me Ishmael'?",
    options: ["Moby Dick", "The Great Gatsby", "To Kill a Mockingbird", "1984"],
    correctAnswer: 0,
    category: "literature",
    difficulty: "medium"
  },
  {
    id: 53,
    question: "Who wrote '1984'?",
    options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
    correctAnswer: 1,
    category: "literature",
    difficulty: "easy"
  },
  {
    id: 54,
    question: "Which novel features the character Atticus Finch?",
    options: ["The Catcher in the Rye", "To Kill a Mockingbird", "Of Mice and Men", "The Great Gatsby"],
    correctAnswer: 1,
    category: "literature",
    difficulty: "medium"
  },
  {
    id: 55,
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "Virginia Woolf"],
    correctAnswer: 2,
    category: "literature",
    difficulty: "easy"
  },
  {
    id: 56,
    question: "Which poem begins with 'Two roads diverged in a yellow wood'?",
    options: ["The Road Not Taken", "Stopping by Woods on a Snowy Evening", "The Love Song of J. Alfred Prufrock", "Do Not Go Gentle Into That Good Night"],
    correctAnswer: 0,
    category: "literature",
    difficulty: "medium"
  },
  {
    id: 57,
    question: "Who wrote 'The Great Gatsby'?",
    options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
    correctAnswer: 1,
    category: "literature",
    difficulty: "easy"
  },
  {
    id: 58,
    question: "Which play features the line 'To be or not to be, that is the question'?",
    options: ["Macbeth", "King Lear", "Hamlet", "Othello"],
    correctAnswer: 2,
    category: "literature",
    difficulty: "easy"
  },
  {
    id: 59,
    question: "Who wrote 'One Hundred Years of Solitude'?",
    options: ["Jorge Luis Borges", "Gabriel García Márquez", "Mario Vargas Llosa", "Octavio Paz"],
    correctAnswer: 1,
    category: "literature",
    difficulty: "hard"
  },
  {
    id: 60,
    question: "Which novel is set in the fictional town of Maycomb, Alabama?",
    options: ["The Sound and the Fury", "To Kill a Mockingbird", "Go Set a Watchman", "A Streetcar Named Desire"],
    correctAnswer: 1,
    category: "literature",
    difficulty: "medium"
  },

  // Cinema Questions (NEW)
  {
    id: 61,
    question: "Who directed the movie 'Titanic'?",
    options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Martin Scorsese"],
    correctAnswer: 1,
    category: "cinema",
    difficulty: "easy"
  },
  {
    id: 62,
    question: "Which movie won the Academy Award for Best Picture in 2020?",
    options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
    correctAnswer: 2,
    category: "cinema",
    difficulty: "medium"
  },
  {
    id: 63,
    question: "Who played the character of Jack Sparrow in Pirates of the Caribbean?",
    options: ["Orlando Bloom", "Johnny Depp", "Geoffrey Rush", "Keira Knightley"],
    correctAnswer: 1,
    category: "cinema",
    difficulty: "easy"
  },
  {
    id: 64,
    question: "Which movie features the famous line 'May the Force be with you'?",
    options: ["Star Trek", "Star Wars", "Guardians of the Galaxy", "Interstellar"],
    correctAnswer: 1,
    category: "cinema",
    difficulty: "easy"
  },
  {
    id: 65,
    question: "Who directed the movie 'Pulp Fiction'?",
    options: ["Quentin Tarantino", "Martin Scorsese", "David Fincher", "Christopher Nolan"],
    correctAnswer: 0,
    category: "cinema",
    difficulty: "medium"
  },
  {
    id: 66,
    question: "Which animated movie features the song 'Let It Go'?",
    options: ["Moana", "Frozen", "Tangled", "The Little Mermaid"],
    correctAnswer: 1,
    category: "cinema",
    difficulty: "easy"
  },
  {
    id: 67,
    question: "Who played the Joker in 'The Dark Knight'?",
    options: ["Jack Nicholson", "Joaquin Phoenix", "Heath Ledger", "Jared Leto"],
    correctAnswer: 2,
    category: "cinema",
    difficulty: "easy"
  },
  {
    id: 68,
    question: "Which movie is known for the quote 'Here's looking at you, kid'?",
    options: ["Gone with the Wind", "Casablanca", "The Maltese Falcon", "Citizen Kane"],
    correctAnswer: 1,
    category: "cinema",
    difficulty: "medium"
  },
  {
    id: 69,
    question: "Who directed the movie 'Inception'?",
    options: ["Denis Villeneuve", "Christopher Nolan", "Ridley Scott", "David Fincher"],
    correctAnswer: 1,
    category: "cinema",
    difficulty: "easy"
  },
  {
    id: 70,
    question: "Which movie won the first ever Academy Award for Best Picture?",
    options: ["Wings", "Sunrise", "The Jazz Singer", "7th Heaven"],
    correctAnswer: 0,
    category: "cinema",
    difficulty: "hard"
  },

  // Cartoon Questions (NEW)
  {
    id: 71,
    question: "Who is the main character in 'SpongeBob SquarePants'?",
    options: ["Patrick Star", "Squidward", "SpongeBob", "Mr. Krabs"],
    correctAnswer: 2,
    category: "cartoon",
    difficulty: "easy"
  },
  {
    id: 72,
    question: "What is the name of Mickey Mouse's dog?",
    options: ["Goofy", "Pluto", "Donald", "Chip"],
    correctAnswer: 1,
    category: "cartoon",
    difficulty: "easy"
  },
  {
    id: 73,
    question: "In 'Tom and Jerry', which one is the cat?",
    options: ["Tom", "Jerry", "Both", "Neither"],
    correctAnswer: 0,
    category: "cartoon",
    difficulty: "easy"
  },
  {
    id: 74,
    question: "What is the name of the town where 'The Simpsons' live?",
    options: ["Shelbyville", "Springfield", "Capital City", "Ogdenville"],
    correctAnswer: 1,
    category: "cartoon",
    difficulty: "easy"
  },
  {
    id: 75,
    question: "Who is Bugs Bunny's main rival?",
    options: ["Porky Pig", "Daffy Duck", "Elmer Fudd", "Tweety"],
    correctAnswer: 2,
    category: "cartoon",
    difficulty: "easy"
  },
  {
    id: 76,
    question: "What is the name of the Great Dane in Scooby-Doo?",
    options: ["Scooby-Doo", "Scrappy-Doo", "Shaggy", "Fred"],
    correctAnswer: 0,
    category: "cartoon",
    difficulty: "easy"
  },
  {
    id: 77,
    question: "In 'Popeye', what gives Popeye his strength?",
    options: ["Carrots", "Spinach", "Broccoli", "Protein shakes"],
    correctAnswer: 1,
    category: "cartoon",
    difficulty: "easy"
  },
  {
    id: 78,
    question: "What is the name of the cat in 'The Smurfs'?",
    options: ["Garfield", "Azrael", "Sylvester", "Felix"],
    correctAnswer: 1,
    category: "cartoon",
    difficulty: "medium"
  },
  {
    id: 79,
    question: "Who created 'The Flintstones'?",
    options: ["Walt Disney", "Hanna-Barbera", "Warner Bros", "Chuck Jones"],
    correctAnswer: 1,
    category: "cartoon",
    difficulty: "medium"
  },
  {
    id: 80,
    question: "What is the name of Donald Duck's nephews?",
    options: ["Chip and Dale", "Huey, Dewey, and Louie", "Tick and Tock", "Tic and Tac"],
    correctAnswer: 1,
    category: "cartoon",
    difficulty: "medium"
  },

  // Mathematics Questions (NEW)
  {
    id: 81,
    question: "What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    correctAnswer: 1,
    category: "mathematics",
    difficulty: "easy"
  },
  {
    id: 82,
    question: "What is the value of π (pi) approximately?",
    options: ["3.14", "3.41", "2.14", "4.13"],
    correctAnswer: 0,
    category: "mathematics",
    difficulty: "easy"
  },
  {
    id: 83,
    question: "What is 7 × 8?",
    options: ["54", "56", "58", "64"],
    correctAnswer: 1,
    category: "mathematics",
    difficulty: "easy"
  },
  {
    id: 84,
    question: "What is the square root of 144?",
    options: ["11", "12", "13", "14"],
    correctAnswer: 1,
    category: "mathematics",
    difficulty: "easy"
  },
  {
    id: 85,
    question: "What is 2³ (2 to the power of 3)?",
    options: ["6", "8", "9", "12"],
    correctAnswer: 1,
    category: "mathematics",
    difficulty: "easy"
  },
  {
    id: 86,
    question: "What is the sum of angles in a triangle?",
    options: ["90°", "180°", "270°", "360°"],
    correctAnswer: 1,
    category: "mathematics",
    difficulty: "easy"
  },
  {
    id: 87,
    question: "What is 25% of 80?",
    options: ["15", "20", "25", "30"],
    correctAnswer: 1,
    category: "mathematics",
    difficulty: "easy"
  },
  {
    id: 88,
    question: "What is the next number in the sequence: 2, 4, 8, 16, ?",
    options: ["24", "28", "32", "36"],
    correctAnswer: 2,
    category: "mathematics",
    difficulty: "medium"
  },
  {
    id: 89,
    question: "What is the area of a circle with radius 5?",
    options: ["25π", "10π", "15π", "20π"],
    correctAnswer: 0,
    category: "mathematics",
    difficulty: "medium"
  },
  {
    id: 90,
    question: "What is the derivative of x²?",
    options: ["x", "2x", "x²", "2x²"],
    correctAnswer: 1,
    category: "mathematics",
    difficulty: "hard"
  },

  // Health & Medicine Questions (NEW)
  {
    id: 91,
    question: "What is the normal human body temperature?",
    options: ["96.8°F", "98.6°F", "100.4°F", "102.2°F"],
    correctAnswer: 1,
    category: "health",
    difficulty: "easy"
  },
  {
    id: 92,
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correctAnswer: 3,
    category: "health",
    difficulty: "easy"
  },
  {
    id: 93,
    question: "How many chambers does a human heart have?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    category: "health",
    difficulty: "easy"
  },
  {
    id: 94,
    question: "What is the largest bone in the human body?",
    options: ["Tibia", "Femur", "Humerus", "Fibula"],
    correctAnswer: 1,
    category: "health",
    difficulty: "medium"
  },
  {
    id: 95,
    question: "Which blood type is known as the universal donor?",
    options: ["A", "B", "AB", "O"],
    correctAnswer: 3,
    category: "health",
    difficulty: "medium"
  },
  {
    id: 96,
    question: "What does BMI stand for?",
    options: ["Body Mass Index", "Basic Medical Information", "Blood Measurement Index", "Bone Mineral Index"],
    correctAnswer: 0,
    category: "health",
    difficulty: "easy"
  },
  {
    id: 97,
    question: "How many calories are in one gram of fat?",
    options: ["4", "7", "9", "12"],
    correctAnswer: 2,
    category: "health",
    difficulty: "medium"
  },
  {
    id: 98,
    question: "What is the recommended daily water intake for adults?",
    options: ["4-6 glasses", "6-8 glasses", "8-10 glasses", "10-12 glasses"],
    correctAnswer: 1,
    category: "health",
    difficulty: "easy"
  },
  {
    id: 99,
    question: "Which organ filters blood in the human body?",
    options: ["Liver", "Lungs", "Kidneys", "Heart"],
    correctAnswer: 2,
    category: "health",
    difficulty: "easy"
  },
  {
    id: 100,
    question: "What is the medical term for high blood pressure?",
    options: ["Hypotension", "Hypertension", "Hyperglycemia", "Hypoglycemia"],
    correctAnswer: 1,
    category: "health",
    difficulty: "medium"
  },

  // Music Questions (NEW)
  {
    id: 101,
    question: "How many strings does a standard guitar have?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 2,
    category: "music",
    difficulty: "easy"
  },
  {
    id: 102,
    question: "Which instrument did Mozart primarily compose for?",
    options: ["Violin", "Piano", "Flute", "Cello"],
    correctAnswer: 1,
    category: "music",
    difficulty: "medium"
  },
  {
    id: 103,
    question: "What does 'forte' mean in music?",
    options: ["Soft", "Loud", "Fast", "Slow"],
    correctAnswer: 1,
    category: "music",
    difficulty: "easy"
  },
  {
    id: 104,
    question: "Which band released the album 'Abbey Road'?",
    options: ["The Rolling Stones", "The Beatles", "Led Zeppelin", "Pink Floyd"],
    correctAnswer: 1,
    category: "music",
    difficulty: "easy"
  },
  {
    id: 105,
    question: "How many keys are on a standard piano?",
    options: ["76", "88", "96", "104"],
    correctAnswer: 1,
    category: "music",
    difficulty: "medium"
  },
  {
    id: 106,
    question: "Who composed 'The Four Seasons'?",
    options: ["Bach", "Mozart", "Vivaldi", "Beethoven"],
    correctAnswer: 2,
    category: "music",
    difficulty: "medium"
  },
  {
    id: 107,
    question: "What is the highest female singing voice?",
    options: ["Alto", "Soprano", "Mezzo-soprano", "Contralto"],
    correctAnswer: 1,
    category: "music",
    difficulty: "easy"
  },
  {
    id: 108,
    question: "Which instrument is Yo-Yo Ma famous for playing?",
    options: ["Violin", "Piano", "Cello", "Flute"],
    correctAnswer: 2,
    category: "music",
    difficulty: "medium"
  },
  {
    id: 109,
    question: "What does 'a cappella' mean?",
    options: ["With instruments", "Without instruments", "Very loud", "Very soft"],
    correctAnswer: 1,
    category: "music",
    difficulty: "easy"
  },
  {
    id: 110,
    question: "Which genre of music originated in New Orleans?",
    options: ["Blues", "Jazz", "Country", "Rock"],
    correctAnswer: 1,
    category: "music",
    difficulty: "medium"
  },

  // Food & Cooking Questions (NEW)
  {
    id: 111,
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Onion", "Pepper"],
    correctAnswer: 1,
    category: "food",
    difficulty: "easy"
  },
  {
    id: 112,
    question: "Which spice is derived from the Crocus flower?",
    options: ["Turmeric", "Paprika", "Saffron", "Cardamom"],
    correctAnswer: 2,
    category: "food",
    difficulty: "medium"
  },
  {
    id: 113,
    question: "What type of pastry is used to make profiteroles?",
    options: ["Puff pastry", "Shortcrust pastry", "Choux pastry", "Filo pastry"],
    correctAnswer: 2,
    category: "food",
    difficulty: "medium"
  },
  {
    id: 114,
    question: "Which country is famous for inventing pizza?",
    options: ["France", "Spain", "Greece", "Italy"],
    correctAnswer: 3,
    category: "food",
    difficulty: "easy"
  },
  {
    id: 115,
    question: "What is the main ingredient in hummus?",
    options: ["Lentils", "Chickpeas", "Black beans", "Kidney beans"],
    correctAnswer: 1,
    category: "food",
    difficulty: "easy"
  },
  {
    id: 116,
    question: "At what temperature does water boil at sea level?",
    options: ["100°C", "90°C", "110°C", "120°C"],
    correctAnswer: 0,
    category: "food",
    difficulty: "easy"
  },
  {
    id: 117,
    question: "Which knife cut produces small cubes?",
    options: ["Julienne", "Chiffonade", "Brunoise", "Batonnet"],
    correctAnswer: 2,
    category: "food",
    difficulty: "hard"
  },
  {
    id: 118,
    question: "What is the most expensive spice in the world by weight?",
    options: ["Vanilla", "Cardamom", "Saffron", "Black truffle"],
    correctAnswer: 2,
    category: "food",
    difficulty: "medium"
  },
  {
    id: 119,
    question: "Which cooking method uses dry heat in an oven?",
    options: ["Braising", "Poaching", "Roasting", "Steaming"],
    correctAnswer: 2,
    category: "food",
    difficulty: "easy"
  },
  {
    id: 120,
    question: "What is the French term for 'everything in its place'?",
    options: ["Mise en place", "Bon appétit", "Chef de cuisine", "Sous vide"],
    correctAnswer: 0,
    category: "food",
    difficulty: "medium"
  }
];