import BootScene from "./BootScene.js";
import MenuScene from "./MenuScene.js";
import GameScene from "./GameScene.js";

const config = {

type: Phaser.AUTO,

width: 480,

height: 800,

parent: "game",

backgroundColor: "#87CEEB",

scene: [

BootScene,
MenuScene,
GameScene

]

};

new Phaser.Game(config);