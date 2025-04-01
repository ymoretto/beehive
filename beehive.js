let nHoney = 0;

const secIncrease = () => {
  nHoney += 1;
  document.getElementById("honey").innerHTML = `You have ${nHoney} honey cells`;
};

window.setInterval(secIncrease, 1000);
