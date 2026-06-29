export default class Coin {

    constructor(scene, x, y) {

        this.scene = scene;

        // Create the coin
        this.sprite = scene.add.circle(
            x,
            y,
            18,
            0xFFD700
        );

        // Enable Arcade Physics
        scene.physics.add.existing(this.sprite);

        this.sprite.body.setAllowGravity(false);

        // Falling speed
        this.fallSpeed = 220;

        // Active flag
        this.active = true;

    }

    update(delta) {

        if (!this.active) return;

        this.sprite.y += this.fallSpeed * (delta / 1000);

    }

    destroy() {

        this.active = false;

        this.sprite.destroy();

    }

}