document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let txt = document.querySelector('p#text');
    txt.textContent = "This is really cool!";
    console.log(txt.textContent)
  });
   
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );