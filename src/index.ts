import './style.css';

const projectsOverview: HTMLElement = document.querySelector(".grid-element-2")!;
const testButton: HTMLButtonElement = document.querySelector(".category-list-element")!;
const projectNameInput: HTMLInputElement = document.querySelector("#task-input")!;
const submitFormButton: HTMLButtonElement = document.getElementById("submit-task-button");

testButton.addEventListener("click", (event: MouseEvent) => {
    const targetButton = event.target as HTMLButtonElement
    console.log(targetButton.id);
});


const appendNewProject = () => {
    const newProjectELement: HTMLElement = document.createElement("button");
    newProjectELement.classList.add("category-list-element");
    newProjectELement.textContent = projectNameInput.value;
    projectsOverview.appendChild(newProjectELement);
}

submitFormButton.addEventListener("click", (event: Event) => {
    event.preventDefault();
    appendNewProject();
})



