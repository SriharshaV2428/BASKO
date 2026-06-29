// =======================================
// BASKO Alpha v0.7
// File: CoinManager.js
// =======================================

import Coin from "../objects/Coin.js";

export default class CoinManager {

    constructor(scene) {

        this.scene = scene;

        // Store all active coins
        this.coins = [];

        // Reference to the current falling coin
        this.currentCoin = null;

        // Spawn the very first coin
        this.spawnCoin();

    }

    spawnCoin() {

        // Random X position
        const x = Phaser.Math.Between(40, 440);

        // Start just above the screen
        const y = -30;

        // Create new coin
        const coin = new Coin(this.scene, x, y);

        // Save current coin
        this.currentCoin = coin;

        // Add to array
        this.coins.push(coin);

    }

    update(delta) {

        // Loop backwards because we may remove coins
        for (let i = this.coins.length - 1; i >= 0; i--) {

            const coin = this.coins[i];

            // Move coin
            coin.update(delta);

            // Coin missed?
            if (coin.sprite.y > 850) {

                coin.destroy();

                this.coins.splice(i, 1);

                // Spawn a replacement coin
                this.spawnCoin();

            }

        }

    }

    collectCurrentCoin() {

        if (!this.currentCoin) return;

        const index = this.coins.indexOf(this.currentCoin);

        if (index !== -1) {

            this.currentCoin.destroy();

            this.coins.splice(index, 1);

        }

        // Clear reference
        this.currentCoin = null;

        // Spawn next coin
        this.spawnCoin();

    }

}