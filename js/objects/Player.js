export default class Player {

    constructor(scene, x, y) {

        this.scene = scene;

        // Create the player (temporary placeholder)
        this.sprite = scene.add.rectangle(
            x,
            y,
            80,
            60,
            0xC68A43
        );

        this.sprite.setStrokeStyle(4, 0x8B5A2B);

        // Enable Arcade Physics
        scene.physics.add.existing(this.sprite);

        this.sprite.body.setAllowGravity(false);
        this.sprite.body.setImmovable(true);

        // Player speed
        this.speed = 350;

        // Keyboard input
        this.cursors = scene.input.keyboard.createCursorKeys();
    }

    update() {

        // Stop previous movement
        this.sprite.body.setVelocityX(0);

        // Move Left
        if (this.cursors.left.isDown) {
            this.sprite.body.setVelocityX(-this.speed);
        }

        // Move Right
        if (this.cursors.right.isDown) {
            this.sprite.body.setVelocityX(this.speed);
        }

        // Keep inside screen
        if (this.sprite.x < 40) {
            this.sprite.x = 40;
        }

        if (this.sprite.x > 440) {
            this.sprite.x = 440;
        }

    }

}