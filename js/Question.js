class Question {
    constructor() {
      this.input = createInput("name");
      this.button = createButton("play");
      this.greeting = createElement('h2');
  }
  
  hide(){
    this.input.hide();
    this.greeting.hide();
    this.button.hide();
  }
  
    display(){
        this.title.html("MY QUIZ GAME");
        this.title.position(350,0);

        this.question.html("Question -What starts and end with 'E',but has only one letter?");
        this.question.position(150,80);
        this.option1.html("1:Everone")
        this.option1.position(150,100);
        this.option2.html("1:Everone")
        this.option2.position(150,120);

        this.input1.position(150,230);
        


    }
  }
  