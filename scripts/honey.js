'use strict'

import { hiveProxy } from './state.js';
import { addWorkerBeeBtn } from './worker.js';

export const updateHoneyUI = () => {
    if (hiveProxy.nHoney === 1) {
      document.getElementById(
        "honey-count"
      ).innerHTML = `You have ${hiveProxy.nHoney} full honey cell`;
    } else {
      document.getElementById(
        "honey-count"
      ).innerHTML = `You have ${hiveProxy.nHoney} full honey cells`;
    }
  
    //check if honey has reached 10
    if (hiveProxy.nHoney === 10) {
      addWorkerBeeBtn();
    }
  };

  

