// Đăng nhập
document.getElementById("login-btn").onclick = () => {
    const answer = document.getElementById("admin-answer").value.trim();
    if (answer === "2462008") {
        document.getElementById("login-screen").classList.add("hidden");
        document.getElementById("menu-screen").classList.remove("hidden");
    } else {
        document.getElementById("error-msg").innerText = "Sai rồi, thử lại!";
    }
};

// Hiển thị mục nội dung
function showSection(id) {
    document.querySelectorAll(".panel").forEach(p => p.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

// Giới hạn bật chức năng
let selected = 0;

document.addEventListener("change", function(e) {
    if(e.target.classList.contains("toggle")) {

        if(e.target.checked) {
            selected++;
        } else {
            selected--;
        }

        // Nếu bật quá 2 chức năng → out sảnh
        if