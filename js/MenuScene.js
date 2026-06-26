export default class MenuScene extends Phaser.Scene{

constructor(){

super("MenuScene");

}

create(){

this.add.text(

240,
200,

"COIN CATCHER",

{

fontSize:"40px",

color:"#ffffff",

fontStyle:"bold"

}

).setOrigin(.5);

const play=this.add.text(

240,
420,

"PLAY",

{

fontSize:"34px",

backgroundColor:"#2ecc71",

padding:{

left:25,
right:25,
top:10,
bottom:10

}

}

)

.setOrigin(.5)

.setInteractive();

play.on("pointerdown",()=>{

this.scene.start("GameScene");

});

}

}