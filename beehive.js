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
  console.log(wrapper);
  let workerBeeBtn = document.createElement("button");
  workerBeeBtn.textContent = "Attract Worker Bee";
  wrapper.appendChild(workerBeeBtn);

  workerBeeBtn.onclick = increaseWorkerBee;
};

const addWorkerBeeDiv = () => {
  let wrapper = document.getElementById("worker-bees");
  // let workerBeeMessage = document.createElement("p");
  // wrapper.appendChild(workerBeeMessage);
  if (hiveProxy === 1) {
    wrapper.innerHTML = `<p>Your ${hiveProxy.nWorker} worker bee is buzzing around</p>`;
  } else {
    wrapper.innerHTML = `<p>Your ${hiveProxy.nWorker} worker bees are buzzing around</p>`;
  }
};

const secIncrease = () => {
  hiveProxy.nHoney++; // Increment honey count via Proxy
};

const increaseWorkerBee = () => {
  hiveProxy.nWorker++;
};

window.setInterval(secIncrease, 1000);
