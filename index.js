const getSchemeBtn = document.getElementById("get-scheme-btn");
let colorPicker = document.getElementById("color-picker");

function giveColorScheme(data) {
  let html = "";
  for (let color of data.colors) {
    html += `<div class="c-1" id="color-1" style="background:${color.hex.value}"></div>`;
  }
  document.getElementById("color-scheme").innerHTML = html;
}

function fetchColorScheme() {
  const hex = colorPicker.value.replace("#", "");
  let mode = document.getElementById("mode-selector").value;
  fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
    .then((response) => response.json())
    .then((data) => {
      giveColorScheme(data);
    });
}
