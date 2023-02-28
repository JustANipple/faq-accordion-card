//Selecting every question box and saving it into an Array
const boxArray = document.querySelectorAll([
    ".invite-box",
    ".size-box",
    ".password-box",
    ".sub-box",
    ".support-box"
]);

//Selecting font weights into root element to change weights on click
const rootStyles = window.getComputedStyle(document.documentElement);
const fwReg = rootStyles.getPropertyValue("--fw-reg");
const fwBold = rootStyles.getPropertyValue("--fw-bold");

//Assigning to every box the event when it gets clicked
for(const box of boxArray) {
    box.addEventListener("click", showOrNot);
}

//Function to show or hide faqs
function showOrNot() {
    //with children i get an array of all non-text elements into the saved box
    //children[0] = question box
    //children[1] = arrow box
    //children[2] = answer box
    if(window.getComputedStyle(this.children[2]).display === "none") {
        for(const box of boxArray) {
            box.children[0].style.fontWeight = fwReg;
            box.children[1].style.transform = "rotate(0deg)";
            box.children[2].style.display = "none";      
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