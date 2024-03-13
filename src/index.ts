import './style.css';

const appendForTest = () => {


    const element: HTMLElement = document.createElement('div');

    element.classList.add("hello");

    element.innerText = "THIS DIV IS DYNAMIC AF"

    return element

}

document.body.appendChild(appendForTest())
