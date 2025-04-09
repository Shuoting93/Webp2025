var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    var dataset = JSON.parse(this.responseText);
    addNewData(dataset);
  }
};

function addNewData(dataset) {
  var myTable = document.getElementById("csie");

  dataset.forEach(function (data) {
    var row = myTable.insertRow(-1);
    row.insertCell(0).innerHTML = data['title'] || '（無標題）';
    row.insertCell(1).innerHTML = data['showInfo']?.[0]?.['location'] || '（無地點）';
    row.insertCell(2).innerHTML = data['showInfo']?.[0]?.['price'] || '（無票價）';
  });
}

// 🔺 點擊按鈕時刪除所有舊資料（除了表頭）
function delOldData() {
  var myTable = document.getElementById("csie");
  // 從底下刪到只剩一列（表頭）
  while (myTable.rows.length > 1) {
    myTable.deleteRow(1);
  }
}
