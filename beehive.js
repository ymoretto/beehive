'use strict';

let hive = {
  nHoney: 0,
  nWorker: 0,
  nPollen: 0,
};

// How JavaScript's Proxy Object Works
// https://www.freecodecamp.org/news/javascript-proxy-object/
const hiveProxy = new Proxy(hive, {
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

    return true;
  },
});

const updateHoneyUI = () => {
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

const updateWorkerUI = () => {
  if (hiveProxy.nWorker > 0) {
    addWorkerBeeDiv();
  }
};

const addWorkerBeeBtn = () => {
  if (document.getElementById("workerBeeBtn")) return;

  let wrapper = document.getElementById("honey");
  let workerBeeBtn = document.createElement("button");
  workerBeeBtn.textContent = "Attract Worker Bee";
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

const addPollenDiv = () => {
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

const secIncrease = () => {
  hiveProxy.nHoney++; // Increment honey count via Proxy
};

const increaseWorkerBee = () => {
  hiveProxy.nWorker++;
};

const increasePollenCount = () => {
  hiveProxy.nPollen++;
  updatePollenUI();
};

// Start the interval to increase honey every second
window.setInterval(secIncrease, 1000);

// Set interval to increase pollen
let pollenTimer = null; // Store interval reference

const startPollenInterval = () => {
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

const saveGame = () => {
  window.localStorage.setItem("hive", 
    JSON.stringify(hiveProxy)
  );
}

const loadGame = () => {
  let loadedHive = window.localStorage.getItem("hive");
  console.log("New hive is", hive);
  loadedHive = JSON.parse(loadedHive);

  Object.assign(hiveProxy, loadedHive);
  addWorkerBeeBtn();
}

document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("save");
  if (saveButton) {
    saveButton.addEventListener("click", saveGame);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const loadButton = document.getElementById("load");
  if (loadButton) {
    loadButton.addEventListener("click", loadGame);
  }
});
