export default class Coin {

    constructor(scene, x, y) {

        this.scene = scene;

        // Temporary placeholder coin
        this.sprite = scene.add.circle(
            x,
            y,
            18,
            0xFFD700
        );

        // Enable Arcade Physics
        scene.physics.add.existing(this.sprite);

        // Coin should fall
        this.sprite.body.setAllowGravity(false);

        // Falling speed
        this.speed = 220;

    }

    update() {

        this.sprite.y += this.speed * 0.016;

        // If coin leaves screen
        if (this.sprite.y > 850) {

            this.sprite.destroy();

        }

    }

}