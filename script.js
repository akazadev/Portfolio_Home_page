var skillsContainer = document.getElementById("skills");
const skillsChanger = document.getElementById("changeSkill");
const backgroundChanger = document.getElementById("viewMode");


const mySkills = [
    "Software developper",
    "Web developper",
    "Mobile developper",
    "Data scientist",
    "Data analyst"];

skillsChanger.addEventListener("click",() => {
    if (mySkills.length !== 0) {
        skillsContainer.textContent= mySkills[0];
        mySkills.shift();

        if (mySkills.length === 0) {
            mySkills.push("Software developper",
            "Web developper",
            "Mobile developper",
            "Data scientist",
            "Data analyst");
        }
    } 
});

backgroundChanger.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "black") {
        setLightMode();
    } else {
        setDarkMode();
    }
});

const setDarkMode = ()=>{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    backgroundChanger.style.background = "url(./img/light-mode.svg)";
}

const setLightMode = ()=>{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    backgroundChanger.style.background = "url(./img/moon.svg)";
}
