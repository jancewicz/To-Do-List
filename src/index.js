import "./style.css";
import Icon from './icons/ghlogo.png'


function appendIcon() {
    const newDiv = document.createElement("div");
    const myIcon = new Image();
    myIcon.src = Icon;

    newDiv.appendChild(myIcon);

    return newDiv
}

document.body.appendChild(appendIcon())

console.log("Webpack test")

// library date-fns installed by npm, check the documentation on github