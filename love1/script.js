// Danh sách các câu chúc lãng mạn
const messages = [
    "Em là điều tuyệt vời nhất trong cuộc đời anh! 😊",
    "Chúc em luôn vui vẻ, hạnh phúc và mãi yêu anh nhé! ❤️",
    "Cảm ơn em đã đến bên anh, yêu em nhiều lắm! 💕",
    "Anh chỉ cần có em, thế giới này đã đủ đẹp rồi! 🌎❤️",
    "Mỗi ngày bên em đều là một ngày tuyệt vời nhất! 🌸",
    "Yêu em mãi mãi, không bao giờ thay đổi! 💖",
    "Chúc em luôn nở nụ cười rạng rỡ như ánh mặt trời! ☀️",
    "Hạnh phúc của anh chính là có em bên cạnh! 💏",
];

// Thay đổi câu chúc mỗi 3 giây
let textIndex = 0;
function changeText() {
    document.getElementById("changing-text").innerText = messages[textIndex];
    textIndex = (textIndex + 1) % messages.length;
}
setInterval(changeText, 3000);

// Hiệu ứng ảnh bay lên vị trí ngẫu nhiên
document.querySelectorAll('.love-images img').forEach(img => {
    img.style.left = Math.random() * 90 + "vw"; 
    img.style.animationDuration = Math.random() * 8 + 5 + "s";
});

// Tạo trái tim bay ngẫu nhiên
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 4 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 500);

// Tự động phát nhạc khi click vào màn hình
document.addEventListener("click", function() {
    let music = document.getElementById("background-music");
    if (music.paused) {
        music.play().catch(error => console.log("Lỗi phát nhạc:", error));
    }
});
