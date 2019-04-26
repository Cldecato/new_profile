$(document).ready(function() {

    var questions = [
        {
            question: 'Where was I born?',
            answers: ['Portsmouth, NH', 'Enfield, NH', 'York, ME', 'Boston, MA'],
            correct: 'Enfield, NH',
            blurb: 'I was born in Enfield, NH and lived there on Evenchance road until I was 5 years old.'
        },{
            question: 'What is my favorite kind of dessert?',
            answers: ['Chocolate Cake', 'Pecan Pie', 'Key Lime Pie', 'Ice Cream'],
            correct: 'Ice Cream',
            blurb: 'How can you not like ice cream?'
        },{
            question: 'How many siblings do I have?',
            answers: ['2 brothers', '1 brother 1 sister', 'Only child', '3 sisters'],
            correct: '2 brothers',
            blurb: 'I have one older brother Kal and one younger brother Craig'
        },{
            question: 'Where do I live?',
            answers: ['Portsmouth, NH', 'Dover, NH', 'Kittery, ME', 'York, ME'],
            correct: 'Portsmouth, NH',
            blurb: 'I currently live in Portsmouth. I enjoy being able to walk downtown to all of the restaurants and bars, but I do miss having a yard.'
        },{
            question: 'What is my favorite programming language?',
            answers: ['Python', 'Ruby', 'JavaScript', 'C#'],
            correct: 'JavaScript',
            blurb: 'I currently only know JavaScript out of these languages, but I am also familiar with HTML, CSS, Jquery, Bootstrap, mysql, node, express, firebase, heroku, github and the list is growing...'
        },{
            question: 'What college/university did I attend?',
            answers: ['Harvard', 'UNH', 'Elon', 'University of Richmond'],
            correct: 'University of Richmond',
            blurb: 'I attended the beautiful University of Richmond in Virginia. I also studied abroad while I was there (more on that to come)'
        },{
            question: 'What Bachelors degree did I recieve from the University of Richmond?',
            answers: ['Political Science', 'Cognitive Science', 'Marketing', 'Accounting'],
            correct: 'Cognitive Science',
            blurb: 'I received a Cognitive Science degree from UR. I found it to be a very interesting major and enjoy talking about it.'
        },{
            question: 'What is my favorite sport?',
            answers: ['Golf', 'Hockey', 'Baseball', 'Ultimate Frisbee'],
            correct: 'Hockey',
            blurb: 'Since I have to chose only one, the answer is hockey, but I love all sports so there really is no wrong answer.'
        },{
            question: 'What is my favorite board game?',
            answers: ['Monopoly', 'Settlers of Catan', 'Chess', 'St. Petersburg'],
            correct: 'St. Petersburg',
            blurb: 'Same concept as sports... St. Petersburg is my top choice, but I love them all.'
        },{
            question: 'What is my favorite type of book to read?',
            answers: ['Dystopian', 'Crime Thriller', 'Biographical', 'Historical Fiction'],
            correct: 'Dystopian',
            blurb: 'I really enjoy dystopian novels. Some of my favorites include Red Rising (trilogy) by Pierce Brown, Legend (trilogy) by Marie Lu. My favorite series is the Kingkiller Chronicles by Patrick Rothfuss, but I would not consider that dystopian.'
        },{
            question: 'What is my favorite movie?',
            answers: ['Anchorman', 'Miracle', 'Remember the Titans', 'Dodgeball'],
            correct: 'Dodgeball',
            blurb: "I can quote the entire movie. It's a gift."
        },{
            question: 'What is my favorite band/artist?',
            answers: ['Kanye', 'Quinn XCII', 'Third Eye Blind', 'Bob Marley'],
            correct: 'Quinn XCII',
            blurb: 'I enjoy many kinds of music, but my favorites are always the ones with chill summer vibes. This does not include Kanye. Not a huge fan of him.'
        },{
            question: 'Which country outside the US have I NOT been to?',
            answers: ['Brazil', 'England', 'New Zealand', 'Costa Rica'],
            correct: 'England',
            blurb: 'I have been to many countries, but none in Europe. The next place I want to go is Italy or southern France.'
        },{
            question: 'What was my favorite subject in college?',
            answers: ['Physics', 'Psychology', 'Logic', 'Philosophy'],
            correct: 'Logic',
            blurb: 'For some reason I have always been good at logic and I really enjoyed the thought provoking problems we had to work through.'
        },{
            question: 'What sport did I play while attending University of Richmond?',
            answers: ['Hockey', 'Golf', 'Ultimate Frisbee', 'Rugby'],
            correct: 'Ultimate Frisbee',
            blurb: 'I played Ultimate for 3 years while at UR. We went to nationals my senior year and have been back each year since my graduation.'
        }];
    var right = [
        "It's like you've known me my whole life!",
        "That is correct!",
        "Bingo! You got it.",
        "You're a real life Sherlock.",
        "Are you sure you didn't do research before this?",
        "Congrats! you guessed it.",
        "That's the one!",
        "Hmmm... Do I know you from somewhere?",
        "Wonderful!",
        "You must be a genius.",
        "How'd you know?!",
        "Are you cheating?",
        "You know me better than I know myself!",
        "Well done!",
        "You must have played this before."]
    var wrong = [
        "I'm sorry, try again.",
        "No. Just No.",
        "Do you even know me at all?",
        "Sadly, you're mistaken.",
        "Nice try.",
        "I thought you had it, but then you didn't.",
        "Ouch. That one hurt.",
        "Wrong.",
        "Looks like we have some catching up to do.",
        "I'm sorry to inform you that you are incorrect.",
        "You learn something new everyday.",
        "Nope. That's not it.",
        "That's not right... try again.",
        "You couldn't hit water if you fell out of a boat.",
        "Did you try googling it first?"]        

    var clicks = 0;
    var counter = 0;
    var choices = [];
    var totalQs = 0;

    $("#gameScreen").on('click', 'button', (function(event) {
        event.preventDefault();
        if ( clicks === 0 ) {
            $("#gameScreen").empty();
            displayQuestion();
            clicks = 1;
            console.log(clicks);
        } else if ( clicks === 1 ) {
            userGuess = $(this).attr("data-name");
            console.log(userGuess);
            displayAnswer();
            clicks = 0;
            // endGame();
        } else {
            console.log('here');
            clicks = 0;
        }
    }))

    function displayQuestion() {
        $('#gameScreen').html(`<center><p>${questions[counter].question}</p>`);
        for ( i = 0; i < questions[counter].answers.length; i++) {
            var btn = $("<button>");
            btn.addClass("options");
            btn.addClass("btn");
            btn.attr("id", "btn" + i);
            btn.attr("data-name", questions[counter].answers[i]);
            btn.text(questions[counter].answers[i]);
            $('#gameScreen').append(btn);
        }
    }

    function displayAnswer() {
        if ( userGuess == questions[counter].correct ) {
            $('#gameScreen').empty();
            $('#gameScreen').html(`<center><p>${right[Math.floor(Math.random()*right.length)]}</p><br><p>${questions[counter].blurb}</p><br><button class='btn'>Next Question!`)
        } else if ( userGuess !== questions[counter].correct ) {
            $('#gameScreen').empty();
            $('#gameScreen').html(`<center><p>${wrong[Math.floor(Math.random()*wrong.length)]}</p><br><p>The answer was ${questions[counter].correct}</p><br><p>${questions[counter].blurb}</p><br><button class='btn'>Next Question!`)
        }
        counter++;
    }
})