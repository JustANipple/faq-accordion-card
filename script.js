const boxArray = document.querySelectorAll([
    ".invite-box",
    ".size-box",
    ".password-box",
    ".sub-box",
    ".support-box"
]);
const answerArray = document.querySelectorAll([
    ".invite-answer",
    ".size-answer",
    ".password-answer",
    ".sub-answer",
    ".support-answer"
]);

for(let i = 0; i < boxArray.length; i++) {
    boxArray[i].addEventListener("click", (event) => {
        if(window.getComputedStyle(answerArray[i]).display === "none") {
            for(const answer of answerArray) {
                answer.style.display = "none";
            }
            answerArray[i].style.display = "block";
        } else {
            answerArray[i].style.display = "none";
        }
    });
}