'use strict'

import { hiveProxy } from './state.js';
import { increasePollenCount } from './pollen.js';

export const secIncrease = () => {
    hiveProxy.nHoney++; // Increment honey count via Proxy
  };

// Set interval to increase pollen
let pollenTimer = null; // Store interval reference

export const startPollenInterval = () => {
  if (!pollenTimer) {
    // Prevent multiple intervals
    pollenTimer = setInterval(() => {
      if (hiveProxy.nWorker > 0) {
        // Ensure a worker bee exists
        console.log("Pollen interval running");
        increasePollenCount();
      }
    }, 5000);
  }
};