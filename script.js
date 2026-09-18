function showMessage() {
  alert("見てくれてありがとう！");
}
function showTab(tabName, clickedButton) {
  // すべての内容を隠す
  const tabs = document.querySelectorAll(".tab-content");

  tabs.forEach(function(tab) {
    tab.classList.remove("active");
  });

  // すべてのボタンからactiveを外す
  const buttons = document.querySelectorAll(".tab-nav button");

  buttons.forEach(function(button) {
    button.classList.remove("active");
  });

  // 選択した内容を表示
  document.getElementById(tabName).classList.add("active");

  // 選択したボタンにactiveを付ける
  clickedButton.classList.add("active");
}

// 最初はHomeを表示
document.querySelector(".tab-nav button").click();