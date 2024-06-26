const coinDecks = [
    [
        { title: "Freeze!", description: "Immobilize an opposing team for 10 minutes. If on a bus, they must exit at the next", coins: 4, uses: 2 },
        { title: "Going Dark", description: "Turn off your tracker for 15 minutes.", coins: 1, uses: Infinity },
        { title: "Reroll", description: "Discard the curse or duel in your hand and draw a new one.", coins: 1, uses: Infinity },
        { title: "Procrastinate", description: "You may complete a challenge before fulfilling the curse played against you.", coins: 2, uses: 3 },
        { title: "Nullify", description: "Immediately count this as fulfilling all curses played against you.", coins: 5, uses: 3 },
        { title: "Speed Demon", description: "Your walking/running counts as bussing for the next 5 minutes.", coins: 4, uses: 1 },
        { title: "Shortcut", description: "Use an electric scooter. This counts as a single bus ride.", coins: 3, uses: 4 },
        { title: "Duel", description: "Draw a duel card and play it against another team.", coins: 4, uses: Infinity }
    ],
    [
        { title: "Challenge Complete!", description: "Complete any challenge.", coins: 1, uses: Infinity },
        { title: "Tag!", description: "Tag another team for the first time.", coins: 1, uses: Infinity },
        { title: "Rest", description: "Don't complete a challenge for the next 30 minutes.", coins: 1, uses: 2 },
        { title: "Repeat Offender", description: "Do a challenge already completed by another team", coins: 2, uses: 3 },
        { title: "Collector", description: "Collect and carry an item with at least the size of a small phone for at least 1.5 hours.", coins: 1, uses: Infinity },
        { title: "Patriotic", description: "Video your team reciting the pledge of allgiance to an American flag.", coins: 2, uses: 1 },
        { title: "Donation", description: "Give a dollar to someone random or to a collection of some sort.", coins: 2, uses: 4 },
        { title: "Go Home", description: "Touch the house of a team member.", coins: 3, uses: 2 }
    ]
]

const decks = [
    [
        { title: "Thirsty Boii 🥵", description: "Take a picture of yourself drinking from a water fountain before completing your next challenge", id: 1 },
        { title: "Like a Seal", description: "Video yourself sliding down a playground slide before completing your next challenge", id: 2 },
        { title: "Back to School!", description: "Use a random number generator to choose a number between 1 and 8. Ride exactly that number of stops on your next bus.", id: 3 },
        { title: "Why are my Pants Sticky?", description: "Ride the next bus you depart on for a minimum of 10 stops. If you are currently on a bus, you must ride for at least 8 more stops.", id: 4 },
        { title: "Atypical Traveler 👽", description: "Video yourself reciting the bus schedule of a bus of your choice as marked at a bus stop before taking your next bus", id: 5 },
        { title: "Trainwreck", description: "You may not buy powerups for the next 20 minutes.", id: 6 },
        { title: "Cursed Connection", description: "Draw a curse card and play it on yourself and one other random player", id: 7 },
        { title: "Sparty's Little Elf", description: "You must visit MSU Campus in the next hour. If you don't make it in that time, you lose 11 points. Mark this as -11 bonus on your next challenge.", id: 8 },
        { title: "Quiet Runner", description: "You must only speak in whispers before you complete your next challenge.", id: 9 },
        { title: "Fat Albert National Park", description: "You must hear at least 3 STOP REQUESTEDs before leaving your next or current bus (or exit at the end of the route)", id: 10 },
        { title: "STOP THE BUS!", description: "Take a video of yourself requesting a stop on a CATA bus before completing your next challenge", id: 11 },
        { title: "Silent Runner 🔇", description: "You may not speak before you complete your next challenge.", id: 12 },
        { title: "SKYLER HAMLIN!", description: "Film yourself aggressively whispering the title of this card at the sky while raising your fist to it before taking your next 20 steps", id: 13 },
        { title: "Blocked Passage", description: "You may not take Route 1 for the next 30 minutes.", id: 14 },
        { title: "Out of Juice 🪫", description: "Charge your phone for at least one minute before completing your next challenge", id: 15 },
        { title: "Why Me?", description: "Pass this curse on by tagging someone. Until you do, your challenges are worth 2 fewer points. This curse then curses the victim. This curse does not stack.", id: 16 },
        { title: "Real Go-Getter", description: "Your next challenge must be an activity challenge.", id: 17 },
        { title: "The Bean 🫘", description: "Take a picture of yourself reflecting on a surface before completing your next challenge", id: 18 },
        { title: "Pokémon Go", description: "Record your shoes as you walk/jog 150 steps before entering your next bus", id: 19 },
        { title: "Litter Quitter ♻️", description: "Take a picture of two pieces of trash you find and dispose of each properly. If you do 5 more, your next challenge is worth one additional point.", id: 20 },
        { title: "Annie Walton???", description: "Take a picture of 5 instances of the letter 'Q' in print", id: 21 },
        { title: "Park Without the Wreck", description: "Record some words of wisdom while sitting at a park before completing your next challenge", id: 22 },
        { title: "Riddle Me This", description: "Flip a coin. If heads, pass this curse along to someone of your choosing. If tails, your next challenge is worth four fewer points.", id: 23 },
        // { title: "Fast Fingers", description: "Only one team member may send messages in the Discord for the next 15 minutes.", id: 24 }, //Delete?
        { title: "Rickroll", description: "Record a dance video to 'Never Gonna Give You Up' before completing your next challenge.", id: 24 },
        { title: "Big Money 🤑", description: "Your next challenge must be worth more than 10 points", id: 25 },
        { title: "Do the Worm", description: "All team members must make a serious attempt at doing the Worm before completing your next challenge.", id: 26 },
        { title: "Don't Tell Aya", description: "Snap a picture of a bird before completing your next challenge", id: 27 },
        { title: "Micky D's", description: "Take a picture of yourself touching a McDonalds or Quality Dairy before completing your next challenge", id: 28 },
        { title: "Get a Room!", description: "Take a photo with a hotel sign or fancy car in the background before completing your next challenge", id: 29 },
        { title: "Walk on Water", description: "Film yourself walking along a portion of the river trail before completing your next challenge or your next challenge is worth 4 points", id: 30 },
        { title: "RUN! 🏃", description: "You must get at least half a mile away from where you are now before completing your next challenge", id: 31 },
        { title: "Flight Stuff", description: "Make an airplane out of sticks laid out on the ground before completing your next challenge. Send a picture of it.", id: 32 },
        { title: "Experimental Design", description: "Write up something you could test about your surrounding area and what you would need to collect quantifiable data before entering your next bus", id: 33 },
        { title: "Looking for Snow ❄️", description: "Be more northerly than all other teams. If you do not accomplish this at any moment before the end of the game, lose 8 points.", id: 34 },
        { title: "Meat Lover", description: "Find a piece of meat before completing your next challenge.", id: 35 },
        { title: "Trojan TRUE", description: "You must complete a challenge in East Lansing in the next hour or take a penalty of 10 points off your final score", id: 36 },
        { title: "Free Airwaves", description: "Record a 60-second ad segment for this game before completing your next challenge. You must actually try.", id: 37 },
        { title: "Cursed Child", description: "Tag someone before your next challenge or take six fewer points on your next challenge", id: 38 },
        { title: "Liv's Intolerances", description: "In the next hour, do something that Liv would disapprove of or eat something that she cannot.", id: 39 },
        { title: "Un-Lucky 40 🍀", description: "Immediately Draw 5 curse cards from your own deck. Chose one of them to complete.", id: 40 }
    ],
    [
        { title: "Go Shopping 🛒", description: "You and the team you declare this duel against have 10 minutes to find or buy an item of your choosing. Have the other teams vote on which is coolest. If you win, gain 16 points. If you lose, the other team gets 8 points.", id: 1 },
        { title: "Amazing Race", description: "Do NOT declare this duel immediately. The next time you tag a team, choose a place at least 1 km away and race there. If you win, gain 16 points, otherwise, the other team gains 8 points. Neither team may complete challenges in this time.", id: 2 },
        { title: "Faces in the Shadows", description: "Immediately earn 12 points. The team you play this duel against is immobilized for 15 minutes. If they are on a bus, they must get off. If you don't tag them in that time, they get 7 points.", id: 3 },
        { title: "Fruit Loops ⭕", description: "First to find a piece of fruit wins. If you win, gain 14 points. If your opponent wins, they gain 7 points.", id: 4 },
        { title: "Cravings", description: "First to visit a pizza parlor wins. If you win, gain 14 points. If your opponent wins, they gain 7 points.", id: 5 },
        { title: "Magnetic Attraction 🧲", description: "Closest to the Capitol building in 15 minutes wins. If you win, gain 16 points. If your opponent wins, they gain 8 points. If both teams touch the Capitol building, they both win.", id: 6 },
        { title: "Washed Away", description: "First to photograph a river wins. If you win, gain 14 points. If your opponent wins, they gain 7 points.", id: 7 },
        { title: "Stuck In Plain Sight", description: "Immediately earn 16 points. You are immobilized for 20 minutes. If you are on a bus, you must exit. Declare this duel against the closest team to you. If they tag you in the next 30 minutes, they gain 8 extra points.", id: 8 },
        { title: "Grasping At Straws", description: "First to find a utensil wins. If you win, gain 6 coins. If your opponent wins, they gain 7 points.", id: 9 },
        { title: "Espionage 🕵️", description: "Declare this duel against two teams secretly — do not notify the teams. Predict their next challenge. Gain 10 points for each correct prediction. The other team(s) gain(s) 1 coin if you're wrong.", id: 10 },
        { title: "Bad Comedians", description: "You and the team you declare this duel against have 5 minutes to come up with the best joke you can. Have the other teams vote on which joke is funniest. If you win, gain 14 points. If you lose, the other team gains 7 points.", id: 11 },
        { title: "Fit and Stylish", description: "First to try on a hat not already owned by a team member wins. If you win, gain 16 points. If your opponent wins, they gain 8 points", id: 12 },
        { title: "Play the Alphabet Game 🔤", description: "First to find every letter of the alphabet in print, in alphabetical order, wins. If you win, gain 18 points. If your opponent wins, they gain 9 points", id: 13 }
    ]
]