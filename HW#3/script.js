const openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

let allData = [];       // 原始資料
let filteredData = [];  // 搜尋後的資料
let currentPage = 1;
const rowsPerPage = 10;

// 取得資料
const xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    allData = JSON.parse(this.responseText);
    filteredData = allData;
    renderTable();
  }
};

function renderTable() {
  const tableBody = document.querySelector("#csie tbody");
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageData = filteredData.slice(start, end);

  pageData.forEach(data => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.title || '（無標題）'}</td>
      <td>${data.showInfo?.[0]?.location || '（無地點）'}</td>
      <td>${data.showInfo?.[0]?.price || '（無票價）'}</td>
    `;
    tableBody.appendChild(row);
  });

  updatePageInfo();
}

function updatePageInfo() {
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  document.getElementById("pageInfo").innerText = `${currentPage} / ${totalPages} 頁`;
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
}

function nextPage() {
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
}

function applySearch() {
  const keyword = document.getElementById("searchInput").value.trim();
  filteredData = allData.filter(d => d.title?.includes(keyword));
  currentPage = 1; // 回到第一頁
  renderTable();
}
