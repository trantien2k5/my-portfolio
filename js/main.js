// Cập nhật năm dưới footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
// Hiển thị thông báo sau khi gửi form (?sent=1)
(function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get("sent") === "1") {
    const box = document.getElementById("contact-success");
    if (box) {
      box.hidden = false;
      // Xóa ?sent=1 khỏi URL cho sạch
      const url = window.location.pathname + window.location.hash;
      window.history.replaceState({}, "", url);
    }
  }
})();
