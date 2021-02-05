//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;

function preload(){

  dog_img = loadImage("images/Dog.png");
  happyDog_img = loadImage("images/happydog.png");

}

function setup() {
  database = firebase.database();
	createCanvas(500,500);



  dog = createSprite(250,250);
  dog.addImage("dog",dog_img);
  dog.scale= 0.2;
  
 

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87);
  
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog_img);
  }

  drawSprites();

  fill("black");
  text("Food Remaining: "+ foodS,170,80);



  fill("red");
  text("Note: Press up Arrow to feed dog milk",130,100);

}

 function readStock(data){
   foodS = data.val();
 }

 function writeStock(x){
   if(x<=0){
     x = 0;
   }else{
     x=x-1;
  }
   database.ref('/').update({
     Food:x
   })
 }

