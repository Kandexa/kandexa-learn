const saveButton = document.getElementById('save-report');
const reportsList = document.getElementById('reports-list');

let reports = [];

saveButton.addEventListener('click', () => {
  const title = document.getElementById('report-title').value;
  const content = document.getElementById('report-content').value;

  if(title === "" || content === "") {
    alert("Lütfen başlık ve içerik girin!");
    return;
  }

  const newReport = { title, content, date: new Date() };
  reports.push(newReport);

  renderReports();

  document.getElementById('report-title').value = "";
  document.getElementById('report-content').value = "";

  const section = document.getElementById('report');
  section.style.backgroundColor = "#dff7e1";
  setTimeout(() => { section.style.backgroundColor = "white"; }, 500);
});

function renderReports() {
  reportsList.innerHTML = "";
  reports.forEach(report => {
    const div = document.createElement('div');
    div.classList.add('report-card');
    div.innerHTML = `
      <h3>${report.title}</h3>
      <p>${report.content}</p>
      <small>${report.date.toLocaleString()}</small>
    `;
    reportsList.appendChild(div);
  });
}

function renderReports() {
  reportsList.innerHTML = "";
  reports.forEach((report, index) => {
    const div = document.createElement('div');
    div.classList.add('report-card');
    div.innerHTML = `
      <h3>${report.title}</h3>
      <p>${report.content}</p>
      <small>${report.date.toLocaleString()}</small>
      <div class="report-actions">
        <button onclick="editReport(${index})">Düzenle</button>
        <button onclick="deleteReport(${index})">Sil</button>
      </div>
    `;
    reportsList.appendChild(div);
  });
}

function deleteReport(index) {
  if(confirm("Bu raporu silmek istediğinizden emin misiniz?")) {
    reports.splice(index, 1);
    renderReports();
  }
}

function editReport(index) {
  const report = reports[index];
  const newTitle = prompt("Yeni başlık girin:", report.title);
  const newContent = prompt("Yeni içerik girin:", report.content);

  if(newTitle !== null && newContent !== null) {
    reports[index].title = newTitle;
    reports[index].content = newContent;
    reports[index].date = new Date(); // güncellenme tarihi
    renderReports();
  }
}
