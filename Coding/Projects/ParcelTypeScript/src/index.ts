
const clickMeBtn = document.querySelector(".btn") as HTMLButtonElement;
const title = document.querySelector(".title") as HTMLHeadingElement;

var colorFlag = false

clickMeBtn.addEventListener("click", ()=>{
    if(colorFlag){
        document.body.style.backgroundColor = "rgb(8, 238, 131)";
        title.style.color = "white"
        colorFlag = false
    }
    else{
        document.body.style.backgroundColor = "aqua";
        title.style.color = "white"
        colorFlag = true
    }
    console.log("clicked")
})