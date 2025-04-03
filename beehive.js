let hive = {
  nHoney: 0,
  nWorker: 0,
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
      // Update nHoney UI
      updateWorkerUI();
    }

    return true;
  },
});

const updateHoneyUI = () => {
  if (hiveProxy.nHoney === 1) {
    document.getElementById(
      "honey"
    ).innerHTML = `You have ${hiveProxy.nHoney} full honey cell`;
  } else {
    document.getElementById(
      "honey"
    ).innerHTML = `You have ${hiveProxy.nHoney} full honey cells`;
  }

  //check if honey has reached 10
  if (hiveProxy.nHoney === 10) {
    addWorkerBeeBtn();
  }
};

const updateWorkerUI = () => {
  console.log("create element now");
};

const addWorkerBeeBtn = () => {
  let wrapper = document.getElementById("beehive");
  let workerBeeBtn = document.createElement("button");
  workerBeeBtn.textContent = "Attract Worker Bee";
  wrapper.appendChild(workerBeeBtn);

  workerBeeBtn.onclick = increaseWorkerBee;
};

const secIncrease = () => {
  hiveProxy.nHoney++; // Increment honey count via Proxy
};

const increaseWorkerBee = () => {
  console.log("Now you hvae one more Worker Bee!");
  // increase worker bee total here
};

window.setInterval(secIncrease, 1000);
