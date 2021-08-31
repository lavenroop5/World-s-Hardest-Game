var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5b6a9122-8fd2-4dea-8262-289ac266037f","1333fac0-b228-4797-8e8f-8ed26bbf5101","d6235aee-817a-4981-86e3-6883bf455103"],"propsByKey":{"5b6a9122-8fd2-4dea-8262-289ac266037f":{"name":"blue_shirt2_1","sourceUrl":null,"frameSize":{"x":20,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"V4jmugDoF4kaSUAcM6_hCVBWw3cv5TUe","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":59},"rootRelativePath":"assets/5b6a9122-8fd2-4dea-8262-289ac266037f.png"},"1333fac0-b228-4797-8e8f-8ed26bbf5101":{"name":"court_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T.BLfNn.3XTblWtBQ7GC1tSx4_8IsEJV/category_backgrounds/background_court.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"T.BLfNn.3XTblWtBQ7GC1tSx4_8IsEJV","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T.BLfNn.3XTblWtBQ7GC1tSx4_8IsEJV/category_backgrounds/background_court.png"},"d6235aee-817a-4981-86e3-6883bf455103":{"name":"ufo_02_1","sourceUrl":null,"frameSize":{"x":28,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"PUuuHCoKfoArM4vAnclG4vsBLxWjzt5a","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":24},"rootRelativePath":"assets/d6235aee-817a-4981-86e3-6883bf455103.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var player;
var obs1,obs2,obs3,obs4,obs5;
var goal;

var background= createSprite(200, 200);
background.setAnimation("court_1");



var player = createSprite(35,380,20,20);
player.setAnimation("ufo_02_1");


var goal = createSprite(365,50,50);
goal.shapeColor = "blue";
var obs1 = createSprite(200,320,300,20);
obs1.shapeColor= "orange";
var obs2 = createSprite(200,270,300,20);
obs2.shapeColor = "orange";
var obs3 = createSprite(200,220,20,20);
obs3.shapeColor = "green";
var obs4 = createSprite(200,160,20,20);
obs4.shapeColor = "black";
var obs5 = createSprite(200,120,20,20);
obs5.shapeColor = "orange";
var obs6= createSprite(330,40,10,80);
obs6.shapeColor= "red";
var obs7 = createSprite(365,110,50,10);
obs7.shapeColor = "red";


obs1.velocityX=3;
obs2.velocityX=3;

obs3.velocityX=14;
obs4.velocityX=14;
obs5.velocityX=14;

function draw (){
  drawSprites();
  
  createEdgeSprites();
 textSize(40) ;
  fill("skyblue");
  
   text("Lives: " + life,35,35);
 
  
textSize(20) ;
  fill("skyblue");
  
   text(" REACH THE BLUE ZONE ",35,85);
 
  
  if(keyDown("right")){
    player.x = player.x + 2;
  }
  if(keyDown("left")){
    player.x = player.x - 2;
  }
  
  if(keyDown("DOWN_ARROW")){
    player.y = player.y + 2;
  }
  if(keyDown("UP_ARROW")){
    player.y = player.y + - 2;
  }
  
   if(
     player.isTouching(obs1)|| player.isTouching(obs2)|| player.isTouching(obs3)||player.isTouching(obs4) || player.isTouching(obs5) || player.isTouching(obs6) || player.isTouching(obs7))
  {
     player.x = 35;
     player.y = 380;
     life = life + 1;
     playSound("assets/category_explosion/vibrant_game_ball_touch_1.mp3");
  }
  if(
    player.isTouching(goal)
    )
    {
      player.x = 35;
      player.y= 380;
      playSound("assets/category_achievements/sharp_win_3.mp3");
    
    }
obs1.bounceOff(edges);
obs2.bounceOff(edges);
obs3.bounceOff(edges);
obs4.bounceOff(edges);
obs5.bounceOff(edges);


}







// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
