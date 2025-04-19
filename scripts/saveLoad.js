'use strict'

const saveGame = () => {
    window.localStorage.setItem("hive", JSON.stringify(hiveProxy));
  };
  
  const loadGame = () => {
    let loadedHive = window.localStorage.getItem("hive");
    console.log("New hive is", hive);
    loadedHive = JSON.parse(loadedHive);
  
    Object.assign(hiveProxy, loadedHive);
    addWorkerBeeBtn();
  };
  
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