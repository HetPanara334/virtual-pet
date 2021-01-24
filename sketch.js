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



  dog = createSprite(100,200);
  dog.height= 1;
  dog.width= 1;
  dog.addImage("dog",dog_img);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog_img);
  }

}

 function readStock(data){
   foodS = data.val();
 }

 function writeStock(x){
   database.ref('/').update({
     food:x
   })
 }

