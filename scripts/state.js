'use strict'

import { updateHoneyUI } from './honey.js';
import { updateWorkerUI } from './worker.js';
import { updateFlowerUI } from './flower.js';


let hive = {
    nHoney: 0,
    nWorker: 0,
    nPollen: 0,
    nFlower: 0,
  };
  
// How JavaScript's Proxy Object Works
// https://www.freecodecamp.org/news/javascript-proxy-object/
export const hiveProxy = new Proxy(hive, {
    // this puts obj honey as the target
    set(target, prop, value) {
        target[prop] = value;
        if (prop === "nHoney") {
        // Update nHoney UI
        updateHoneyUI();
        }

        if (prop === "nWorker") {
        // Update nWorker UI
        updateWorkerUI();
        }

        if (prop === "nFlower") {
        // Update nWorker UI
        updateFlowerUI();
        }

        return true;
    },
});