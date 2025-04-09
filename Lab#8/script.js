var container = document.getElementById('container');
var wrongCount = 0;

window.onload = function () {
  container.textContent = add_new_chars(3);
  container.focus(); // 一進來就可打字
};

// 產生 1~x 個亂數小寫字元
function add_new_chars(x) {
  var n = Math.floor(Math.random() * x) + 1;
  var str = '';
  for (let i = 0; i < n; i++) {
    str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }
  return str;
}

window.addEventListener("keyup", function (e) {
  var firstChar = container.textContent.substring(0, 1);

  if (e.key === firstChar) {
    // ✅ 正確輸入，移除第一個字元
    container.textContent = container.textContent.substring(1);
    wrongCount = 0;
  } else {
    // ❌ 錯誤輸入
    wrongCount++;

    if (wrongCount >= 3) {
      // 🔺連錯三次，加額外 6 個字元
      container.textContent += add_new_chars(6);
      wrongCount = 0;
    }
  }

  // ✅ 不論對錯，Lab#7 的基本條件：都要再加 1~3 個字元
  container.textContent += add_new_chars(3);
});
