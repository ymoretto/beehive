'use strict'

import { hiveProxy } from './state.js';
import { startPollenInterval } from './gameLoop.js';
import { addPollenDiv } from './pollen.js';
import { addFlowerBtn } from './flower.js';

export const updateWorkerUI = () => {
    if (hiveProxy.nWorker > 0) {
      addWorkerBeeDiv();
    }
  
    if (hiveProxy.nWorker === 5) {
      addFlowerBtn();
    }
};

export const addWorkerBeeBtn = () => {
    if (document.getElementById("workerBeeBtn")) return;

    let wrapper = document.getElementById("honey");
    let workerBeeBtn = document.createElement("button");
    workerBeeBtn.textContent = "Attract Worker Bee";
    workerBeeBtn.id = "workerBeeBtn";
    wrapper.appendChild(workerBeeBtn);

    workerBeeBtn.onclick = increaseWorkerBee;
};

const addWorkerBeeDiv = () => {
    // start worker bee counter
    let workerCount = document.getElementById("worker-bee-count");
  
    if (hiveProxy.nWorker === 1) {
      workerCount.textContent = `Your ${hiveProxy.nWorker} worker bee is buzzing around`;
    } else {
      workerCount.textContent = `Your ${hiveProxy.nWorker} worker bees are buzzing around`;
    }
  
    // starter worker bee productivity message
    let WorkerProductivity = document.getElementById("productivity-message");
    WorkerProductivity.textContent = `Your worker bees are collecting 1 pollen per day`;
  
    if (hiveProxy.nWorker === 1) {
      startPollenInterval();
      addPollenDiv();
    }
  };

const increaseWorkerBee = () => {
    let cost = calculateWorkerBeeCost();
    console.log("Cost to attract worker bee:", cost);
    if (hiveProxy.nHoney < cost) {
      alert("You don't have enough honey to attract a worker bee!");
      return;
    }
    hiveProxy.nHoney -= cost;
    hiveProxy.nWorker++;
  };

const calculateWorkerBeeCost = () => {
    return 10 * Math.pow(2, hiveProxy.nWorker);
  };