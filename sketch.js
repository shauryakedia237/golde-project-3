 const Engine = Matter.Engine;
 const World= Matter.World; 
 const Bodies = Matter.Bodies;
 engine = Engine.create();
 world = engine.world;

var prize, player;
function preload(){
    prizeimg = loadImage("images/mysterybox.png")
    gImg = loadImage("images/ghost.png")
}
function setup(){
    var canvas = createCanvas(1440,900);
    // engine = Engine.create();
    // world = engine.world;

    prize = createSprite(980,380);
    prize.addImage(prizeimg);
    prize.scale= 0.6;

  
    ghost2 = createSprite(160,260,50,50);
    ghost2.velocityX=random(-1,1);
    ghost2.velocityY=random(-1,1);
    ghost2.addImage(gImg);
    ghost2.scale=0.4;
    
    
    

    wall1 = new maze (0,70,100,20);
    wall2 = new maze(100,190,20,610);
    wall3 = new maze(100,800,780,20);
    wall4 = new maze(980,800,340,20);
    wall5 = new maze(1320,90,20,730);
    wall6 = new maze(320,70,1020,20);
    wall7 = new maze(200,0,20,720);
    wall8 = new maze(120,190,100,20);
    wall9 = new maze(860,490,20,310);
    wall10 = new maze(760,190,20,510);
    wall11 = new maze(200,700,580,20);
    wall12 = new maze(880,490,100,20);
    wall13 = new maze(980,490,20,310);
    wall14 = new maze(400,600,380,20);
    wall15 = new maze(300,500,380,20);
    wall16 = new maze(400,400,380,20);
    wall17 = new maze(300,300,380,20);
    wall18 = new maze(400,200,380,20);
    wall19 = new maze(300,70,20,550);
    wall20 = new maze(860,260,240,20);
    wall21 = new maze(860,260,20,240);
    wall22 = new maze(1080,260,20,540);
    wall23 = new maze(860,200,360,20);
    wall24 = new maze(1180,280,140,20);
    wall25 = new maze(1080,360,140,20);
    wall26 = new maze(1180,440,140,20);
    wall27 = new maze(1080,520,140,20);
    wall28 = new maze(1180,600,140,20);
    wall29 = new maze(1080,680,140,20);
    wall30 = new maze(1180,760,140,20);

}

function draw(){
    background(180); 

    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();
    wall5.display();
    wall6.display();
    wall7.display();
    wall8.display();
    wall9.display();
    wall10.display();
    wall11.display();
    wall12.display();
    wall13.display();
    wall14.display();
    wall15.display();
    wall16.display();
    wall17.display();
    wall18.display();
    wall19.display();
    wall20.display();
    wall21.display();
    wall22.display();
    wall23.display();
    wall24.display();
    wall25.display();
    wall26.display();
    wall27.display();
    wall28.display();
    wall29.display();
    wall30.display();
    //wall31.display();
       drawSprites();
     
}