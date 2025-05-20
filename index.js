const gameUrl = "https://grid-word-game.netlify.app";
const srcCodeUrl = "https://github.com/Anas-Riaz/4x4GridGame";
const slideUrl = "https://docs.google.com/presentation/d/11CZamruvAjvWcDuSX5_sExHszu9qM1W_nBOiHohRwvg/edit?usp=sharing";

const btnUrl = document.querySelector("#gameBtnUrl");
btnUrl.addEventListener("click", () => {
    window.open(gameUrl, "_blank");
});

const sourceCodeBtn = document.querySelector("#src-code");
sourceCodeBtn.addEventListener("click", () => {
    window.open(srcCodeUrl, "_blank");
});

const slideDownloadBtn = document.querySelector("#slide-btn");
slideDownloadBtn.addEventListener("click", () => {
    window.open(slideUrl, "_blank");
});
