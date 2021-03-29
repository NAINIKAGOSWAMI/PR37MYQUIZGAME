class Contestant {
    constructor(){
  this.index = null;
  this.distance = 0;
  this.name = null;
    }
  
    getCount(){
      var ContestantCountRef = database.ref('playerCount');
     ContestantCountRef.on("value",function(data){
       ContestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
       ContestantCount: count
      });
    }
  
    update(){
      varContestantIndex = "contestants/contestant" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance :this.distance
      });
    }
    static getPlayerInfo(){
      varContestantInfoRef  =database.ref('contestants');
     ContestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
  
    
  }
  