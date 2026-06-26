export default class GameScene extends Phaser.Scene{

constructor(){

super("GameScene");

}

create(){

this.add.text(

240,
400,

"Gameplay Coming Soon",

{

fontSize:"32px",

color:"#ffffff"

}

).setOrigin(.5);

}

}