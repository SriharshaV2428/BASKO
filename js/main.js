import BootScene from "./scenes/BootScene.js";
import MenuScene from "./scenes/MenuScene.js";
import GameScene from "./scenes/GameScene.js";

const config = {

    type: Phaser.AUTO,

    width: 480,

    height: 800,

    parent: "game",

    backgroundColor: "#87CEEB",

    // ==========================
    // Arcade Physics
    // ==========================
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },

    scene: [
        BootScene,
        MenuScene,
        GameScene
    ]

};

new Phaser.Game(config);