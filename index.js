const getSchemeBtn = document.getElementById("get-scheme-btn");
let colorPicker = document.getElementById("color-picker");

function giveColorScheme(data) {
  let schemehtml = "";
  let hexhtml = "";
  data.colors.forEach((color, index) => {
    schemehtml += `<div class="c-1" id="color-1" style="background:${color.hex.value}"></div>`;

    hexhtml += `<div class="hex-item" id="hex-${index}">
    <span class="hex-value">${color.hex.value}</span>
    <button class="copy-btn" data-hex="${color.hex.value}"><img class="copy-btn-img"
              src="./images/copy-img.png"
            /></button>
    </div>`;
  });
  document.getElementById("color-scheme").innerHTML = schemehtml;
  document.getElementById("hex-values").innerHTML = hexhtml;
}

document.getElementById("hex-values").addEventListener("click", (event) => {
  const copyBtn = event.target.closest(".copy-btn");
  if (copyBtn) {
    const hexValue = copyBtn.dataset.hex;
    navigator.clipboard.writeText(hexValue);
    alert("Copied the hex code: " + hexValue);
  }
});

function fetchColorScheme() {
  const hex = colorPicker.value.replace("#", "");
  let mode = document.getElementById("mode-selector").value;
  fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
    .then((response) => response.json())
    .then((data) => {
      giveColorScheme(data);
    });
}
