//first independent exercise
//regular
function wait(numberOfmilliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, numberOfmilliseconds);
  });
}

wait(2000).then(() => {
  console.log("executed after 2 seconds");
});

//Exercise to Readme File

function loadScript(fileName) {
  let script = document.createElement("script");
  script.setAttribute("src", fileName);
  document.body.appendChild(script);

  return new Promise((resolve, reject) => {
    script.onload = function() {
      resolve();
    };
    script.onerror = function() {
      reject();
    };
  });
}

loadScript("./my-module.js")
  .then(() => {
    helloWorld();
  })
  .catch(e => {
    console.log(e);
  });
