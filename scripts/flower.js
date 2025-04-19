'use strict'

import { hiveProxy } from './state.js';

export const updateFlowerUI = () => {
    if (hiveProxy.nFlower === 1) {
      addFlowerGarden();
    }
  
    let flowerCounter = document.getElementById("flower-count");
    if (hiveProxy.nFlower === 1) {
      flowerCounter.textContent = `You have ${hiveProxy.nFlower} flower.`
    } else if (hiveProxy.nFlower > 0) {
      flowerCounter.textContent = `You have ${hiveProxy.nFlower} flowers`
    }
  };
  
export const addFlowerBtn = () => {
    if (document.getElementById("flowerBtn")) return;
  
    let wrapper = document.getElementById("garden-btn");
    let flowerBtn = document.createElement("button");
    flowerBtn.textContent = "Plant 1 Flower";
    flowerBtn.id = "flowerBtn";
    wrapper.appendChild(flowerBtn);
    flowerBtn.onclick = increaseFlowerCount;
  };
  
const addFlowerGarden = () => {
    let flowerGarden = document.getElementById("flower-garden-title");
    flowerGarden.textContent = `You have a flower garden!`;
  };

const increaseFlowerCount = () => {
    hiveProxy.nFlower++;
    updateFlowerUI();
  };