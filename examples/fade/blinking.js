'use strict'

import FadePlugin from './../../plugins/fade-plugin.js';

const Between = Phaser.Math.Between;

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
        this.load.image('dot', 'assets/images/white-dot.png');
    }

    create() {
        for (var i = 0; i < 500; i++) {
            var img = this.add.image(Between(5, 795), Between(5, 595), 'dot').setAlpha(0);
            var fade = new FadePlugin(img, {
                delay: Between(0, 100),
                duration: Between(500, 1000),
                alpha: {
                    start: Math.random(),
                    end: Math.random()
                },
                mode: 'yoyo'
            });
            fade.start();
        }
    }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Demo
};

var game = new Phaser.Game(config);