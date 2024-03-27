import { renderDropDown, dropdownFunctionality } from "./renderDropDown";
import { toggleProjectState } from "../functionality/convertToActive";

export const overviewsContainer: HTMLElement = document.querySelector(".grid-element-3")!;
const projectsContainerElement: HTMLElement = document.querySelector(".grid-element-2")!;


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


    const dataInputContainer: HTMLElement = renderDataInputContainerLeftSide(projectNameElements, projectIndex);
    const middleSideInputContainer: HTMLElement = renderDataInputContainerMiddleSide();

    const rightSideInputContainer: HTMLElement = renderDataInputContainerRightSide();


    projectDataContainer.appendChild(dataInputContainer);
    projectDataContainer.appendChild(middleSideInputContainer);

    projectOverviewContainer.appendChild(projectDataContainer);
    projectOverviewContainer.appendChild(rightSideInputContainer);

    overviewsContainer.appendChild(projectOverviewContainer);


}


export const renderDataInputContainerLeftSide = (
    projectNameElements: Element[],
    projectIndex: number
): HTMLElement => {

    let dataInputContainer: HTMLElement = document.createElement("div");
    dataInputContainer.classList.add("input-to-insert-left");

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
                    newTaskInputElement.value = "";
                }
            }
        })
    })();

    return dataInputContainer;

}


export const renderDataInputContainerMiddleSide = (): HTMLElement => {

    const rightSector: HTMLElement = document.createElement("div");
    rightSector.classList.add("input-to-insert-right");

    const dueToDateLabel: HTMLLabelElement = document.createElement("label");
    dueToDateLabel.setAttribute("for", "date-due-to");
    dueToDateLabel.innerText = "Project has to be done due to: ";

    const dueToDateInput: HTMLInputElement = document.createElement("input");
    dueToDateInput.classList.add("due-to-input");
    dueToDateInput.setAttribute("type", "date");
    dueToDateInput.setAttribute("id", "date-due-to");

    const chosenDateContainer: HTMLElement = document.createElement("div");
    chosenDateContainer.classList.add("show-date");
    chosenDateContainer.innerText = "D A T E";

    rightSector.appendChild(dueToDateLabel);
    rightSector.appendChild(dueToDateInput);
    rightSector.appendChild(chosenDateContainer);


    return rightSector;
}

export const renderDataInputContainerRightSide = (): HTMLElement => {

    const rightSectorContainerElement: HTMLElement = document.createElement("div");
    rightSectorContainerElement.classList.add("project-data-right-sector");

    const rightSectorUpperPartContainer: HTMLElement = document.createElement("div");
    rightSectorUpperPartContainer.classList.add("right-sector-upper");

    const priorityDataContainer: HTMLElement = document.createElement("div");
    priorityDataContainer.classList.add("priority");
    priorityDataContainer.innerText = "1"; // hardcoded change later

    const newDropdown = renderDropDown();
    rightSectorUpperPartContainer.appendChild(newDropdown);
    rightSectorUpperPartContainer.appendChild(priorityDataContainer);

    dropdownFunctionality();


    const rightSectorLowerPartContainer: HTMLElement = document.createElement("div");
    rightSectorLowerPartContainer.classList.add("right-sector-lower");

    const trashBinIcon: HTMLImageElement = document.createElement("img");
    trashBinIcon.classList.add("delete-tasks-overview");
    trashBinIcon.setAttribute("src", "images/trashbin.svg");

    rightSectorLowerPartContainer.appendChild(trashBinIcon);


    rightSectorContainerElement.appendChild(rightSectorUpperPartContainer);
    rightSectorContainerElement.appendChild(rightSectorLowerPartContainer);


    (() => {
        overviewsContainer.addEventListener("click", (event: Event) => {

            const target = event.target as HTMLElement;
            if (target.className === "delete-tasks-overview" && target.closest(".right-sector-lower")) {

                const trashbinIcons: Element[] = [...document.querySelectorAll(".delete-tasks-overview")];
                const indexOfTrashbinIcon: number = trashbinIcons.indexOf(target);
                if (indexOfTrashbinIcon !== -1) {
                    trashbinIcons[indexOfTrashbinIcon].parentElement?.parentElement?.parentElement?.remove();
                }
            }
        })
    })();

    return rightSectorContainerElement;

}




toggleProjectState();


