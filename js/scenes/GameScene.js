export default class GameScene extends Phaser.Scene {

    constructor() {
        super("GameScene");
    }

    create() {

        // =======================
        // Sky Gradient
        // =======================

        const graphics = this.add.graphics();

        graphics.fillGradientStyle(
            0x87CEEB,
            0x87CEEB,
            0xE6F7FF,
            0xE6F7FF,
            1
        );

        graphics.fillRect(0, 0, 480, 800);

        // =======================
        // Ground
        // =======================

        graphics.fillStyle(0x5FBF4A, 1);
        graphics.fillRect(0, 700, 480, 100);

        // =======================
        // Sun
        // =======================

        const sun = this.add.circle(380, 120, 50, 0xFFD54F);

        this.tweens.add({
            targets: sun,
            scale: 1.08,
            duration: 2000,
            yoyo: true,
            repeat: -1,
            ease: "Sine.easeInOut"
        });

        // =======================
        // Clouds
        // =======================

        const cloud1 = this.add.ellipse(120, 140, 90, 45, 0xffffff);
        const cloud2 = this.add.ellipse(320, 220, 110, 55, 0xffffff);

        this.tweens.add({
            targets: cloud1,
            x: 520,
            duration: 25000,
            repeat: -1
        });

        this.tweens.add({
            targets: cloud2,
            x: -100,
            duration: 35000,
            repeat: -1
        });

        // =======================
        // Create Player
        // =======================

        this.player = this.add.rectangle(
            240,
            640,
            80,
            60,
            0xC68A43
        );

        this.player.setStrokeStyle(4, 0x8B5A2B);

        // Give rectangle a physics body
        this.physics.add.existing(this.player);

        // Player should not fall
        this.player.body.setAllowGravity(false);

        // Player should not move because of collisions
        this.player.body.setImmovable(true);

        // Keyboard
        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update() {

        const speed = 350;

        // Stop previous movement
        this.player.body.setVelocityX(0);

        // Move Left
        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-speed);
        }

        // Move Right
        if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(speed);
        }

        // Keep inside screen

        if (this.player.x < 40) {
            this.player.x = 40;
        }

        if (this.player.x > 440) {
            this.player.x = 440;
        }

    }

}