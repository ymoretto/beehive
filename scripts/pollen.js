'use strict'

import { hiveProxy } from './state.js'

export const addPollenDiv = () => {
    let pollenCount = document.getElementById("pollen-count");
    pollenCount.textContent = `You have 0 pollen grain`;
  };

const updatePollenUI = () => {
    let pollenCount = document.getElementById("pollen-count");
    if (hiveProxy.nPollen === 1) {
      pollenCount.textContent = `You have ${hiveProxy.nPollen} pollen grain`;
    } else {
      pollenCount.textContent = `You have ${hiveProxy.nPollen} pollen grains`;
    }
  };

export const increasePollenCount = () => {
    hiveProxy.nPollen++;
    updatePollenUI();
  };