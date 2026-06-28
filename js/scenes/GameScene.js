export default class GameScene extends Phaser.Scene {

    constructor() {
        super("GameScene");
    }

    create() {

        // Sky Gradient
        const graphics = this.add.graphics();

        graphics.fillGradientStyle(
            0x87CEEB, // Top Left
            0x87CEEB, // Top Right
            0xE6F7FF, // Bottom Left
            0xE6F7FF, // Bottom Right
            1
        );

        graphics.fillRect(0, 0, 480, 800);

    }

}