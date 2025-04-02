
window.onload = function () {
  const container = document.getElementById("container");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const len = Math.floor(Math.random() * 3); // 0~2
  let randomText = "";

  for (let i = 0; i < len; i++) {
    const char = alphabet[Math.floor(Math.random() * alphabet.length)];
    randomText += char;
  }

  container.textContent += randomText;
};

window.addEventListener("keyup", function (e) {
  const container = document.getElementById("container");
  const currentText = container.textContent;
  const pressedKey = e.key;

  
  if (currentText.charAt(0) === pressedKey) {
    container.textContent = currentText.slice(1);
  }

  
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const len = Math.floor(Math.random() * 3) + 1; // 1~3
  let randomText = "";

  for (let i = 0; i < len; i++) {
    const char = alphabet[Math.floor(Math.random() * alphabet.length)];
    randomText += char;
  }

  container.textContent += randomText;
});
