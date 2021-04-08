class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  
  play(){ 
    
    Contestant.getContestantInfo();

    var i =createElement('h2');
    i.html("RESULT");
    i.position(100,0);
    background("yellow");

    var y =270;
    if(allContestants!==undefined){
      fill("blue")
      textSize(20);
      text("Contestants who are right are highlighted in green",150,230);
     
    }
    for(var plr in allContestants){
      y = y+20;
      var correctAns="2";
      if(correctAns==allContestants[plr].answer){
        fill("green");
        text(allContestants[plr].name+"You are right",150,y);
       
        
      }
      else{
        fill("red")
        text(allContestants[plr].name+"You are wrong",150,y);
      }
    }
    
  }

}
