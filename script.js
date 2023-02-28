const boxArray = document.querySelectorAll([
    ".invite-box",
    ".size-box",
    ".password-box",
    ".sub-box",
    ".support-box"
]);

const rootStyles = window.getComputedStyle(document.documentElement);
const fwReg = rootStyles.getPropertyValue("--fw-reg");
const fwBold = rootStyles.getPropertyValue("--fw-bold");

for(const box of boxArray) {
    box.addEventListener("click", showOrNot);
}

function showOrNot() {
    if(window.getComputedStyle(this.children[2]).display === "none") {
        for(const box of boxArray) {
            this.children[0].style.fontWeight = fwReg;
            this.children[1].style.transform = "rotate(0deg)";
            this.children[2].style.display = "none";      
        }        
        this.children[0].style.fontWeight = fwBold;
        this.children[1].style.transform = "rotate(180deg)";
        this.children[2].style.display = "block";
    } else {
        this.children[0].style.fontWeight = fwReg;
        this.children[1].style.transform = "rotate(0deg)";
        this.children[2].style.display = "none";  
    }
}