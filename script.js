// Array of quotes for Aquarius
const aquariusQuotes = [
    "You need to spend more time with your loved ones",
    "Someone will show you something amazing soon, you shall be suprized",
    // Add more quotes here
    "You are very creative and its time to put yourself in that project you have been thinking about alot lately",
    "You shall see how strong you are in the next few weeks and look back with greatness",
    "Creativity is bounding with you, waiting to explore new paths",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon",
    "You must be the change you wish to see in the world. -Mahatma Gandhi",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
    "The only thing we have to fear is fear itself. -Franklin D. Roosevelt",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Martin Luther King Jr.",
    "Do one thing every day that scares you. -Eleanor Roosevelt",
    "Well done is better than well said. -Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller",
    "It is during our darkest moments that we must focus to see the light. -Aristotle",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
    "Be yourself; everyone else is already taken. -Oscar Wilde",
    "You will face many defeats in life, but never let yourself be defeated. -Maya Angelou",
    "Go confidently in the direction of your dreams! Live the life you've imagined. -Henry David Thoreau",
    "In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",
    "Never let the fear of striking out keep you from playing the game. -Babe Ruth",
    "In this life we cannot do great things. We can only do small things with great love. -Mother Teresa",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss",
    "If life were predictable it would cease to be life and be without flavor.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Life is a succession of lessons which must be lived to be understood",
    "You will face many defeats in life, but never let yourself be defeated",
    "Never let the fear of striking out keep you from playing the game.",
    "The only impossible journey is the one you never begin",
    "In this life we cannot do great things. We can only do small things with great love",
    "Only a life lived for others is a life worthwhile.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
    "Don't worry when you are not recognized, but strive to be worthy of recognition",
    "The greatest glory in living lies not in never falling, but in rising every time we fall",
    "Life is really simple, but we insist on making it complicated",
    "Life itself is the most wonderful fairy tale",
    "Do not let making a living prevent you from making a life",
    "Life is either a daring adventure or nothing",
    "Life is a long lesson in humility.",
    "In three words I can sum up everything I've learned about life: it goes on. -Robert Frost",
    "Keep smiling, because life is a beautiful thing and there's so much to smile about",
    "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
    "Life is trying things to see if they work",
    "Many of life's failures are people who did not realize how close they were to success when they gave up",
    "Success is not final; failure is not fatal: It is the courage to continue that counts. -Winston S. Churchill",
    "If you really look closely, most overnight successes took a long time",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "The secret of success is to do the common thing uncommonly well",
    "The way to get started is to quit talking and begin doing",
    "Don't be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you",
    "Everything you can imagine is real",
    "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere",
    "The only limit to our realization of tomorrow will be our doubts of today",
    "It is better to fail in originality than to succeed in imitation.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    "Try not to become a man of success. Rather become a man of value",
    "Don't be afraid to give up the good to go for the great",
    "Leave nothing for tomorrow which can be done today",
    "Success is walking from failure to failure with no loss of enthusiasm",
    "When you undervalue what you do, the world will undervalue who you are.",
    "If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work",
    "The only place where success comes before work is in the dictionary",
    "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    "Before anything else, preparation is the key to success",
    "In playing ball, and in life, a person occasionally gets the opportunity to do something great. When that time comes, only two things matter: being prepared to seize the moment and having the courage to take your best swing",
    "You miss 100% of the shots you don't take. -Wayne Gretzky",
    "Whether you think you can or you think you can't, you're right. -Henry Ford",
    "I alone cannot change the world, but I can cast a stone across the water to create many ripples. -Mother Teresa",
    "The question isn't who is going to let me; it's who is going to stop me",
    "The most difficult thing is the decision to act, the rest is merely tenacity.",
    "How wonderful it is that nobody need wait a single moment before starting to improve the world",
    "An unexamined life is not worth living",
    "Everything you've ever wanted is on the other side of fear.",
    "Dream big and dare to fail.",
    "Courage is grace under pressure",
    "It is still best to be honest and truthful; to make the most of what we have; to be happy with simple pleasures; and have courage when things go wrong",
    "Nothing is impossible, the word itself says, I'm possible!'",
    "It does not matter how slowly you go as long as you do not stop",
    "Don't find fault, find a remedy: anyone can complain",
    "A man may die, nations may rise and fall, but an idea lives on",
    "I have learned over the years that when one's mind is made up, this diminishes fear.",
    "I didn't fail the test. I just found 100 ways to do it wrong",
    "If you're offered a seat on a rocket ship, don't ask what seat! Just get on",
    "With great power comes great responsibility",
    "I would rather die of passion than of boredom",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
    "Dreaming, after all, is a form of planning",
    "Whatever the mind of man can conceive and believe, it can achieve",
    "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end",
    "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover",
    "There are only two great tragedies in life: one is not getting what you want and the other is getting it",
    "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
    "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning",
    "Love takes off the masks that we fear we cannot live without and know we cannot live within.",
    "Sometimes the questions are complicated, and the answers are simple.",
    "What gets us into trouble is not what we dont know. Its what we know for sure that just aint so",
    "Anyone who has never made a mistake has never tried anything new",
    "Knowing what must be done does away with fear",
    "Holding onto your anger is like drinking poison and expecting the other person to die",
    "Life can only be understood backwards; but it must be lived forwards",
    "Its not that Im so smart. Its just that I stay with problems longer",
    "The two most important days of your life are the day that youre born and the day that you find out why",
    "Education is not the learning of the facts, but the training of the mind to think.",
    "A bird doesn't sing because it has an answer, it sings because it has a song",
    "If you surrender to the wind, you can ride it.",
    "We dont see things the way they are. We see them the way we are.",
    "A journey of a thousand miles begins with a single step",
    "All life is an experiment. The more experiments you make, the better",
    "Be more concerned with your character than your reputation, because your character is what you really are, while your reputation is merely what others think you are",
    "Learn from the mistakes of others. You cant live long enough to make them all yourself",
    "Many receive advice, only the wise profit from it.",
    "The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function",
    "May the Force be with you",
    "You're gonna need a bigger boat",
    "Keep your friends close, but your enemies closer.",
    "Alone we can do so little; together we can do so much.",
    "Talent wins games, but teamwork and intelligence win championships",
    "If you want to lift yourself up, lift up someone else",
    "None of us, including me, ever do great things. But we can all do small things, with great love, and together we can do something wonderful",
    "Politeness is the poison of collaboration",
    "You need to be aware of what others are doing, applaud their efforts, acknowledge their successes, and encourage them in their pursuits. When we all help one another, everybody wins.",
    "The measure of intelligence is the ability to change",
    "The greatest discovery of all time is that a person can change his future by merely changing his attitude",
    "Every day the clock resets. Your wins don't matter. Your failures don't matter. Don't stress on what was, fight for what could be",
    "Dont let rejection create self-doubt. The founder of Starbucks was turned down by 217 of the 242 investors he initially spoke with",
    "Play to your strengths. If you arent great at something, do more of what youre great at",
    "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world",
    "To improve is to change; to be perfect is to change often",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination",
    "If you don't like something, change it. If you can't change it, change your attitude",
    "The secret of change is to focus all of your energy not on fighting the old, but on building the new",
    "Since we cannot change reality, let us change the eyes which see reality",
    "There is nothing permanent except change",
    "Change before you have to",
    "Change is the law of life, and those who look only to the past and present are certain to miss the future",
    "If you cant fly, then run. If you cant run, then walk. If you cant walk, then crawl. But whatever you do, you have to keep moving forward",
    "I alone cannot change the world, but I can cast a stone across the waters to create many ripples",
    "Change is inevitable. Growth is optional.",
    "The price of doing the same old thing is far higher than the price of change",
    "Dont let rejection create self-doubt. The founder of Starbucks was turned down by 217 of the 242 investors he initially spoke with",
    "Not everything that is faced can be changed, but nothing can be changed until it is faced",
    "Miracles happen every day, change your perception of what a miracle is and youll see them all around you",
    "You've done it before and you can do it now. See the positive possibilities. Redirect the substantial energy of your frustration and turn it into positive, effective, unstoppable determination",
    "Just take any step, whether small or large. And then another and repeat day after day. It may take months, maybe years, but the path to success will become clear",
    "Keep your face to the sunshine and you cannot see a shadow",
    "If your startup builds a room full of pessimists and you have one optimist at the table, then I think you’re in the wrong business. But the other way around is invaluable and necessary",
    "You build on failure. You use it as a stepping stone. Close the door on the past. You don't try to forget the mistakes, but you don't dwell on it. You don't let it have any of your energy, or any of your time, or any of your space.",
    "Things change. And friends leave. Life doesnt stop for anybody",
    "Get busy living or get busy dying",
    "If you want to live a happy life, tie it to a goal, not to people or things",
    "Money and success dont change people; they merely amplify what is already there",
    "The big lesson in life, baby, is never be scared of anyone or anything",
    "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment",
    "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
    "The best answer to anger is silence.",
    "The more we value things outside our control, the less control we have.",
    "You can commit injustice by doing nothing.",
    "Waste no more time arguing about what a good man should be. Be one",
    "Each day provides its own gifts",
    "The only wealth which you will keep forever is the wealth you have given away",
    "Have I been made for this, to lie under the blankets and keep myself warm?",
    "Conceal a flaw, and the world will imagine the worst.",
    "Life is neither good or evil, but only a place for good and evil.",
    "Settle on the type of person you want to be and stick to it, whether alone or in company.",
    "We suffer more often in imagination than in reality.",
    "Ignorance is the cause of fear.",
    "While we wait for life, life passes.",
    "Only time can heal what reason cannot.",
    "While we are postponing, life speeds by.",
    "Difficulty comes from our lack of confidence.",
    "Life is very short and anxious for those who forget the past, neglect the present, and fear the future.",
    "Religion is regarded by the common people as true, by the wise as false, and by rulers as useful.",
    "No man is free who is not master of himself.",
    "A ship should not ride on a single anchor, nor life on a single hope.",
    "Know, first, who you are, and then adorn yourself accordingly.",
    "It is the nature of the wise to resist pleasures, but the foolish to be a slave to them.",
    "First learn the meaning of what you say, and then speak.",
    "If you want something good, get it yourself.",
    "No loss should be more regrettable to us than losing our time, for its irretrievable.",
    "Since every man dies, it is better to die with distinction than to live long.",
    "He with the most who is content with the least.",
    "Well-being is realized by small steps, but is truly no small thing",
    "Better to trip with the feet than with the tongue",
    "How long are you going to wait before you demand the best for yourself?",
    "Curb your desire—dont set your heart on so many things and you will get what you need",
    "The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control. Where then do I look for good and evil? Not to uncontrollable externals, but within myself to the choices that are my own",
    "Dont seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well",
    "If you want to improve, be content to be thought foolish and stupid.",
    "How does it help . . . to make troubles heavier by bemoaning them?",
    "No person has the power to have everything they want, but it is in their power not to want what they dont have, and to cheerfully put to good use what they do have",
    "If a man knows not which port he sails, no wind is favorable",
    "Life is very short and anxious for those who forget the past, neglect the present, and fear the future",
    "But I'll tell you what hermits realize. If you go off into a far, far forest and get very quiet, you'll come to understand that you're connected with everything.",
    "The ego is nothing other than the focus of conscious attention.",
    "Things are as they are. Looking out into it the universe at night, we make no comparisons between right and wrong stars, nor between well and badly arranged constellations.",
    "Never pretend to a love which you do not actually feel, for love is not ours to command.",
    "No work or love will flourish out of guilt, fear, or hollowness of heart, just as no valid plans for the future can be made by those who have no capacity for living now.",
    "I owe my solitude to other people.",
    "We cannot be more sensitive to pleasure without being more sensitive to pain.",
    "To have faith is to trust yourself to the water. When you swim you don't grab hold of the water, because if you do you will sink and drown. Instead you relax, and float.",
    "I have realized that the past and future are real illusions, that they exist in the present, which is what there is and all there is.",
    "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    "If you think you're free, there's no escape possible.",
    "I can do nothing for you but work on myself...you can do nothing for me but work on yourself",
    "Your problem is you are too busy holding on to your unworthiness",
    "The next message you need is always right where you are",
    "Let's trade in all our judging for appreciating. Let's lay down our righteousness and just be together",
    "Suffering is part of our training program for becoming wise",
    "What you meet in another being is the projection of your own level of evolution",
    "The most important aspect of love is not in giving or the receiving: it's in the being. When I need love from others, or need to give love to others, I'm caught in an unstable situation. Being in love, rather than giving or taking love, is the only thing that provides stability. Being in love means seeing the Beloved all around me",
    "As long as you have certain desires about how it ought to be you can't see how it is",
    "Treat everyone you meet like God in drag",
    "In most of our human relationships, we spend much of our time reassuring one another that our costumes of identity are on straight",
    "It is important to expect nothing, to take every experience, including the negative ones, as merely steps on the path, and to proceed",
    "We're fascinated by the words--but where we meet is in the silence behind them",
    "The quieter you become, the more you can hear.",
    "We're all just walking each other home.",
    "It's only when caterpillarness is done that one becomes a butterfly. That again is part of this paradox. You cannot rip away caterpillarness. The whole trip occurs in an unfolding process of which we have no control",
    "Compassion refers to the arising in the heart of the desire to relieve the suffering of all beings",
    "Emotions are like waves. Watch them disappear in the distance on the vast calm ocean",
    "Suffering is the sandpaper of our incarnation. It does its work of shaping us",
    "Healing does not mean going back to the way things were before, but rather allowing what is now to move us closer to God",
    "It's very different because the Indians live as if they are their souls and Americans live as if they are their egos",
    "It's all real and it's all illusory, thats awareness",
    "Information is just bits of data. Knowledge is putting them together. Wisdom is transcending them",
    "Souls love. Thats what souls do. Egos dont, but souls do. Become a soul, look around, and youll be amazed-all the beings around you are souls. Be one, see one. When many people have this heart connection, then we will know that we are all one, we human beings all over the planet. We will be one. One love. And dont leave out the animals, and trees, and clouds, and galaxies-its all one. Its one energy",
    "You and I are the force for transformation in the world. We are the consciousness that will define the nature of the reality we are moving into",
    "I hang out with my guru in my heart. And I love everything in the universe. Thats all I do all day",
    "When somebody provokes your anger, the only reason you get angry is because youre holding on to how you think something is supposed to be. Youre denying how it is. Then you see its the expectations of your own mind that are creating your own hell. When you get frustrated because something isnt the way you thought it would be, examine the way you thought, not just the thing that frustrates you. Youll see that a lot of your emotional suffering is created by your models of how you think the universe should be and your inability to allow it to be as it is",
    "If I go into the place in myself that is love, and you go into the place in yourself that is love, we are together in love. Then you and I are truly in love, the state of being love. Thats the entrance to Oneness. Thats the space I entered when I met my guru",
    "As we grow in our consciousness, there will be more compassion and more love, and then the barriers between people, between religions, between nations will begin to fall. Yes, we have to beat down the separateness",
    "Our plans never turn out as tasty as reality",
    "We come into relationships often very much identified with our needs. I need this, I need security, I need refuge, I need friendship. And all of relationships are symbiotic in that sense. We come together because we fulfill each others needs at some level or other",
    "When I look at relationships, my own and others, I see a wide range of reasons for people to be together and ways in which they are together. I see ways in which a relationship  which means something that exists between two or more people for the most part reinforces peoples separateness as individual entities",
    "The thinking mind is what is busy. You have to stay in your heart. You have to be in your heart. Be in your heart. The rest is up here in your head where you are doing, doing, doing",
    "In India, theres a way of seeing life as a cosmic play. Its called Lila. I can watch my life, and I can see my guru playing with me",
    "Every religion is the product of the conceptual mind attempting to describe the mystery",
    "As one individual changes, the system changes",
    "The human mind is like that monkey, incessantly active by its own nature, then it becomes drunk with the wine of desire, thus increasing its turbulence. After desire takes possession comes the sting of the scorpion of jealousy at the success of others, and last of all the demon of pride enters the mind, making it think itself of all importance",
    "The freer I get, the higher I go. The higher I go, the more I see. The more I see, the less I know. The less I know, the more Im free",
    "Our journey is about being more deeply involved in Life and yet less attached to it.",
    "I see my life as an unfolding set of opportunities to awaken",
    "I see my life as an unfolding set of opportunities to awaken",
    "Cosmic humor, especially about your own predicament, is an important part of your journey",
    "Inspiration is God making contact with itself",
    "Now is now. Are you going to be here or not?",
    "The world is won by those who let it go",
    


















































    


    






];

// Function to display a random quote for Aquarius
function displayRandomAquariusQuote() {
    const randomIndex = Math.floor(Math.random() * aquariusQuotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = aquariusQuotes[randomIndex];
}

// Call the function to display a random quote for Aquarius
displayRandomAquariusQuote();



