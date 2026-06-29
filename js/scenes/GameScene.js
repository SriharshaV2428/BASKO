// =======================================
// BASKO Alpha v0.7.1
// File: GameScene.js
// =======================================

import Player from "../objects/Player.js";
import CoinManager from "../managers/CoinManager.js";

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

        this.cloud1 = this.add.ellipse(
            120,
            140,
            90,
            45,
            0xffffff
        );

        this.cloud2 = this.add.ellipse(
            320,
            220,
            110,
            55,
            0xffffff
        );

        // =======================
        // Player
        // =======================

        this.player = new Player(this, 240, 640);

        // =======================
        // Coin Manager
        // =======================

        this.coinManager = new CoinManager(this);

        // =======================
        // Score
        // =======================

        this.score = 0;

        this.scoreText = this.add.text(
            20,
            40,
            "Score: 0",
            {
                fontSize: "28px",
                color: "#ffffff",
                fontStyle: "bold"
            }
        );

    }

    update(time, delta) {

        // =======================
        // Move Clouds
        // =======================

        this.cloud1.x += 0.4;
        this.cloud2.x -= 0.25;

        if (this.cloud1.x > 540) {
            this.cloud1.x = -60;
        }

        if (this.cloud2.x < -60) {
            this.cloud2.x = 540;
        }

        // =======================
        // Player
        // =======================

        this.player.update();

        // =======================
        // Coins
        // =======================

        this.coinManager.update(delta);

        // =======================
        // Collision
        // =======================

        const coin = this.coinManager.currentCoin;

        if (coin && coin.active) {

            if (
                Phaser.Geom.Intersects.RectangleToRectangle(
                    this.player.sprite.getBounds(),
                    coin.sprite.getBounds()
                )
            ) {

                this.score++;

                this.scoreText.setText(
                    "Score: " + this.score
                );

                this.coinManager.collectCurrentCoin();

            }

        }

    }

}