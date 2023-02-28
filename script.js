const boxArray = document.querySelectorAll([
    ".invite-box",
    ".size-box",
    ".password-box",
    ".sub-box",
    ".support-box"
]);

/*
const questionArray = document.querySelectorAll([
    ".invite-question",
    ".size-question",
    ".password-question",
    ".sub-question",
    ".support-question"
]);
const answerArray = document.querySelectorAll([
    ".invite-answer",
    ".size-answer",
    ".password-answer",
    ".sub-answer",
    ".support-answer"
]);
const arrowArray = document.querySelectorAll([
    ".invite-arrow",
    ".size-arrow",
    ".password-arrow",
    ".sub-arrow",
    ".support-arrow" 
]);
*/

const rootStyles = window.getComputedStyle(document.documentElement);
const fwReg = rootStyles.getPropertyValue("--fw-reg");
const fwBold = rootStyles.getPropertyValue("--fw-bold");

/*
for(let i = 0; i < boxArray.length; i++) {
    boxArray[i].addEventListener("click", (event) => {

        if(window.getComputedStyle(answerArray[i]).display === "none") {
            for(let j = 0; j < boxArray.length; j++) {
                answerArray[j].style.display = "none";
                questionArray[j].style.fontWeight = fwReg;
                arrowArray[j].style.transform = "rotate(0deg)";
            }
            answerArray[i].style.display = "block";
            questionArray[i].style.fontWeight = fwBold;
            arrowArray[i].style.transform = "rotate(180deg)";
        } else {
            answerArray[i].style.display = "none";
            questionArray[i].style.fontWeight = fwReg;
            arrowArray[i].style.transform = "rotate(0deg)";
        }

    });
}
*/

for(const box of boxArray) {
    box.addEventListener("click", showOrNot);
}

function showOrNot() {
    if(window.getComputedStyle(this.children[2]).display === "block") {
        
    } else if (window.getComputedStyle(this.children[2]).display === "none")
}