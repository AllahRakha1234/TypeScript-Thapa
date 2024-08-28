const clickMeBtn = document.querySelector(".btn");
const title = document.querySelector(".title");
var colorFlag = false;
clickMeBtn.addEventListener("click", ()=>{
    if (colorFlag) {
        document.body.style.backgroundColor = "rgb(8, 238, 131)";
        title.style.color = "white";
        colorFlag = false;
    } else {
        document.body.style.backgroundColor = "aqua";
        title.style.color = "white";
        colorFlag = true;
    }
    console.log("clicked");
});

//# sourceMappingURL=index.377278e2.js.map
