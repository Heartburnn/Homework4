var questionEl = $('#question');
var button = $('#answers');
var menuBtn = $('#menu');
var scoreEl = $('#score');
var timerEl = $('#timer')
var userName = $('#name');
var submitScore = $('#submit');

var playAgain = menuBtn.children().eq(0);


var buttonOne = button.children().eq(0);
var buttonTwo = button.children().eq(1);
var buttonThree = button.children().eq(2);
var buttonFour = button.children().eq(3);

var questionPool = ["How old am I?", "What is my name?", "What is my favorite color?", "When is Christmas?"];
var questionNum=0;
var gameStatus=false;
var score = 0;
var rightAnswer=0;
var right = false;


questionEl.text("General Knowledge");
$('#enterName').css({
    "display": "none"
})

timerEl.css({
    "display": "none"
})



//removes the answer buttons
function game(){
    
    console.log(gameStatus)
    buttonOne.css({
        "display":"none"
    });
    buttonTwo.css({
        "display":"none"
    });
    buttonThree.css({
        "display":"none"
    });
    buttonFour.css({
        "display":"none"
    });
    
    
    playAgain.on("mousedown", questionStart);
}

//code removes the play button and displays the answer buttons. Starts the timer function and resets key variables to 0;
function questionStart(){
    timerEl.css({
        "display": "block"
    })
    $('#enterName').css({
        "display": "none"
    })
    myTimer();
    score=0;
    questionNum=0;
    gameStatus=true;
  
    
    playAgain.css({
        "display":"none"
    });
   
    buttonOne.css({
        "display":"block"
    });
    buttonTwo.css({
        "display":"block"
    });
    buttonThree.css({
        "display":"block"
    });
    buttonFour.css({
        "display":"block"
    });

    scoreEl.text("");
    question(questionNum);
}   

//function used when game is over, takes away display of the answer buttons while displaying score
function gameOver(){
   
    timerEl.css({
        "display": "none"
    })
    $('#enterName').css({
        "display": "block"
    });
    score += secondsLeft;
    console.log("gameOver")
    questionEl.text("Game Over");
 
    buttonOne.css({
        "display":"none"
    });
    buttonTwo.css({
        "display":"none"
    });
    buttonThree.css({
        "display":"none"
    });
    buttonFour.css({
        "display":"none"
    });
    playAgain.css({
        "display": "block"
    });
    
    scoreEl.text("Your score was "+score);

}

//question function, runs the options, answers, and rightWrong functions. Runs the gameOver function when the user passes through all the questions
function question(questionNum){
    
    if(questionNum>=questionPool.length){
        
        gameOver();
    }

    questionEl.text(questionPool[questionNum]);
    options(questionNum);
    answers();
    rightWrong();
    
    console.log(questionNum) 
}

//replaces the text in the buttons with the options
function options(questionNum){
    if(questionNum===0){
        buttonOne.text("10");
        buttonTwo.text("14");
        buttonThree.text("18");
        buttonFour.text("21");
        rightAnswer=4;
    }
    if(questionNum===1){
        buttonOne.text("Ethan");
        buttonTwo.text("John");
        buttonThree.text("Thomas");
        buttonFour.text("Rick");
        rightAnswer=1;
    }
    if(questionNum===2){
        buttonOne.text("red");
        buttonTwo.text("grey");
        buttonThree.text("yellow");
        buttonFour.text("black");
        rightAnswer=2;
    }
    if(questionNum===3){
        buttonOne.text("Dec 15th");
        buttonTwo.text("Dec 25th");
        buttonThree.text("Jan 18th");
        buttonFour.text("Dec 31st");
        rightAnswer=4;
    }
}

//determines if the user selected the right or wrong answers
function answers(){
    if(questionNum===0){
        if(buttonOne.unbind().on("mousedown",function(e){
            right=false;
           
        }));
        if(buttonTwo.unbind().on("mousedown",function(e){
            right=false;
           
        }));
        if(buttonThree.unbind().on("mousedown",function(e){
            right=false;
            
        }));
        if(buttonFour.unbind().on("mousedown",function(e){
            right=true;
            
        }));
        
    }

    if(questionNum===1){
        
        if(buttonOne.unbind().on("mousedown",function(e){
           
            right=true;
            
        }));
        if(buttonTwo.unbind().on("mousedown",function(e){
           
            right=false;
               
        }));
        if(buttonThree.unbind().on("mousedown",function(e){
           
            right=false;
           
        }));
        if(buttonFour.unbind().on("mousedown",function(e){
            
            right=false;
           
        }));
    }

    if(questionNum===2){
       
        if(buttonOne.unbind().on("mousedown",function(e){
          
            right=false;
            
        }));
        if(buttonTwo.unbind().on("mousedown",function(e){
            
            right=true;
            
        }));
        if(buttonThree.unbind().on("mousedown",function(e){
           
            right=false;
              
        }));
        if(buttonFour.unbind().on("mousedown",function(e){
           
            right=false;
            
        }));
    }

    if(questionNum===3){
    
        if(buttonOne.unbind().on("mousedown",function(e){
            
            right=false;
            
        }));
        if(buttonTwo.unbind().on("mousedown",function(e){
           
            right=true;
                      
        }));
        if(buttonThree.unbind().on("mousedown",function(e){
           
            right=false;
                     
        }));
        if(buttonFour.unbind().on("mousedown",function(e){
          
            right=false;
                   
        }));
    }

}



//function that updates variables based on if the user answer was right or wrong
function rightWrong(){
   
    button.unbind().on("mousedown",function(e){
       if(right===true){ 
        score+=10;
        console.log("right");
        console.log(right);
        questionNum++;
        question(questionNum);
        
       }
       if(right===false){
        console.log("wrong");
        console.log(right);
        questionNum++;
        question(questionNum);
        
        secondsLeft-=3;
        
        $('#timer').text(secondsLeft+" -3");
    
       }
       
    });
}



//timer function, runs gameOver function if out of time, and clears the time left if the user answers all the questions before the time limit.
var secondsLeft = 31;
function myTimer() {
    // Sets interval in variable
    secondsLeft = 31;
    var timerInterval = setInterval(function() {
      secondsLeft--;
      $('#timer').text(secondsLeft);
  
      if(secondsLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        gameOver();
      }
      if(questionNum>=questionPool.length){
          gameOver();
          $('#timer').text(secondsLeft);
          clearInterval(timerInterval);
      }
      
  
    }, 1000);
}


//code and functon below saves user input in local storage, only displays the top 5 scores.
var highScores =JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

var MAX_HIGH_SCORES = 5;
$('#name').on("keyup", ()=>{
    console.log(userName.val());
});

$('#submit').on('click',function(e){
   
    
    console.log("click");
    e.preventDefault();

    const scoree = {
        score: score,
        name: userName.val()
    };
    highScores.push(scoree);

    highScores.sort((a,b)=> b.scoree - a.scoree)

    highScores.splice(5);

    localStorage.setItem("highscore", JSON.stringify(highScores, null,''));
    
    
    console.log(highScores);
    var neat = localStorage.getItem("highscore")
    

    hS.innerHTML = neat;
    




});


//runs the game
game();



