class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("play");
        this.greeting=createElement('h3');
        this.reset=createButton('reset');
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        var title=createElement('h2');
        title.html("car racing game");
        title.position(displayWidth/2-50,0);
        this.reset.position(displayWidth-100,20);
        

        this.input.position(displayWidth/2-40,160);
        this.button.position(displayWidth/2+100,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();

            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("hello "+player.name);
            this.greeting.position(displayWidth/2-40,160);
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })
    }
}