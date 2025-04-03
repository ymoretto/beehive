let honey = {
  nHoney: 0,
};

// How JavaScript's Proxy Object Works
// https://www.freecodecamp.org/news/javascript-proxy-object/
const honeyProxy = new Proxy(honey, {
  // this puts obj honey as the target
  set(target, prop, value) {
    if (prop === "nHoney") {
      // Update nHoney count
      target[prop] = value;

      // Update UI
      if (honeyProxy.nHoney === 1) {
        document.getElementById(
          "honey"
        ).innerHTML = `You have ${honeyProxy.nHoney} full honey cell`;
      } else {
        document.getElementById(
          "honey"
        ).innerHTML = `You have ${honeyProxy.nHoney} full honey cells`;
      }

      //check if honey has reached 10
      if (target.nHoney === 10) {
        addCollectHoneyBtn();
      }

      return true;
    }
  },
});

const addCollectHoneyBtn = () => {
  let wrapper = document.getElementById("beehive");
  let collectBtn = document.createElement("button");
  collectBtn.textContent = "Collect Honey";
  wrapper.appendChild(collectBtn);

  collectBtn.onclick = secIncrease;
};

const secIncrease = () => {
  honeyProxy.nHoney++; // Increment honey count via Proxy
};

window.setInterval(secIncrease, 1000);
