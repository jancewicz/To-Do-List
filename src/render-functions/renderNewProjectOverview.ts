import { Project } from "../classes/project";
import { selectCategory } from "..";
import { Category } from "../classes/project";

const projectsContainerElement: HTMLElement = document.querySelector(".grid-element-2")!;
const overviewsContainer: HTMLElement = document.querySelector(".grid-element-3")!;

export const renderNewProjectOverview = () => {

    projectsContainerElement.addEventListener("click", (event: Event) => {
        const target = event.target as HTMLElement;
        if (target.className === "go-to-project") {
            const projectNameElements: Element[] = [...document.querySelectorAll(".go-to-project")];
            const projectIndex: number = projectNameElements.indexOf(target);
            // more code after render functions is done
            console.log(`Clicking on ${projectNameElements[projectIndex].textContent}`);
            renderNewOverview(projectNameElements, projectIndex);
        }
    });
};


export const renderNewOverview = (
    projectNameElements: Element[],
    projectIndex: number
) => {
    const projectOverviewContainer: HTMLElement = document.createElement("div");
    projectOverviewContainer.classList.add("project-overview");

    const projectDataContainer: HTMLElement = document.createElement("div");;
    projectDataContainer.classList.add("project-data");


    let dataInputContainer: HTMLElement = saveDataInOverview(projectNameElements, projectIndex)


    projectDataContainer.appendChild(dataInputContainer);

    projectOverviewContainer.appendChild(projectDataContainer);

    overviewsContainer.appendChild(projectOverviewContainer);

}


export const saveDataInOverview = (
    projectNameElements: Element[],
    projectIndex: number
) => {

    let dataInputContainer: HTMLElement = document.createElement("div");
    dataInputContainer.classList.add("input-to-insert");

    const projectName: HTMLParagraphElement = document.createElement("p");
    projectName.classList.add("project-overview-name");
    projectName.innerText = projectNameElements[projectIndex].textContent!;

    const taskListContainerElement: HTMLElement = document.createElement("div");
    taskListContainerElement.classList.add("tasks-input");

    const formContainerELement: HTMLFormElement = document.createElement("form");
    formContainerELement.classList.add("enter-new-task");

    const newTaskInputElement: HTMLInputElement = document.createElement("input");
    newTaskInputElement.setAttribute("type", "text");
    newTaskInputElement.setAttribute("id", "new-task");
    newTaskInputElement.setAttribute("name", "new-task");
    newTaskInputElement.classList.add("get-new-task");

    const addNewTaskButtonElement: HTMLButtonElement = document.createElement("button");
    addNewTaskButtonElement.setAttribute("type", "submit");
    addNewTaskButtonElement.classList.add("add-task-button");
    addNewTaskButtonElement.textContent = "Add new task";

    formContainerELement.appendChild(newTaskInputElement);
    formContainerELement.appendChild(addNewTaskButtonElement);

    const taskUListElement: HTMLUListElement = document.createElement("ul");
    taskUListElement.classList.add("tasks");


    taskListContainerElement.appendChild(formContainerELement);
    taskListContainerElement.appendChild(taskUListElement);


    dataInputContainer.appendChild(projectName);
    dataInputContainer.appendChild(taskListContainerElement);

    (() => {
        overviewsContainer.addEventListener("click", (event: Event) => {
            const target = event.target as HTMLElement;
            event.preventDefault();

            if (target.className === "add-task-button" && target.closest(".enter-new-task")) {

                const newTaskButtons: Element[] = [...document.querySelectorAll(".add-task-button")];
                const indexOfNewTaskButton: number = newTaskButtons.indexOf(target);
                if (indexOfNewTaskButton !== -1) {

                    const newTaskListElement: HTMLLIElement = document.createElement("li");
                    const inputValue: string = newTaskInputElement.value;
                    newTaskListElement.innerText = inputValue;
                    taskUListElement.appendChild(newTaskListElement);
                }
            }
        })
    })();

    return dataInputContainer;

}






