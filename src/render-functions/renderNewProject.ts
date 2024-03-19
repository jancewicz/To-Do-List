import { Project } from "../classes/project";
import { selectCategory } from "..";
import { Category } from "../classes/project";

let projects: Project[] = [];
let projectId: number = 1;


export const rendertrashBinIcon = () => {
    const trashbinIcon: HTMLImageElement = document.createElement("img");
    trashbinIcon.setAttribute("src", "images/trashbin.svg");
    trashbinIcon.classList.add("trashbin-icon");
    trashbinIcon.setAttribute("alt", "trashbin-icon");
    trashbinIcon.setAttribute("id", `delete-${projectId}`);

    return trashbinIcon;
}

const renderCategories = () => {

}

export const renderNewProject = () => {
    const selectedCategory: Category = selectCategory();

    const projectsOverview: HTMLElement = document.querySelector(".grid-element-2")!;
    const projectNameInput: HTMLInputElement = document.querySelector("#project-input")!;

    let newProject: Project = new Project(projectNameInput.value, selectedCategory, new Date());

    const newProjectELement: HTMLElement = document.createElement("div");
    newProjectELement.classList.add("project-list-element");
    newProjectELement.id = `project-${projectId}`;

    const newProjectDescription: HTMLElement = document.createElement("div");
    newProjectDescription.classList.add("go-to-project");
    newProjectDescription.innerText = newProject.name;

    const trashbinDiv: HTMLDivElement = document.createElement("div");
    trashbinDiv.classList.add("delete-project");

    const trashbinIcon: HTMLImageElement = rendertrashBinIcon();
    trashbinDiv.appendChild(trashbinIcon);

    newProjectELement.appendChild(newProjectDescription);
    newProjectELement.appendChild(trashbinDiv);

    projectsOverview.appendChild(newProjectELement);

    projects.push(newProject);
    console.log(newProject);
    console.log(projects);
    projectId++;
}

export const removeProjectFromContainer = () => {
    const projectsContainerElement: HTMLElement = document.querySelector(".grid-element-2")!;

    projectsContainerElement.addEventListener("click", (event: Event) => {
        const target = event.target as HTMLElement;

        if (target.tagName === "IMG" && target.closest(".delete-project")) {

            const trashbins = [...document.querySelectorAll(".delete-project img")];
            const trashbinIndex = trashbins.indexOf(target);
            target.parentElement?.parentElement?.remove();

            projects = projects.filter((el: Project, index: number) => {
                return index !== trashbinIndex;
            });
            console.log(projects);
        }

    })
};




// const addNewTask = () => {
//     const addTaskButtonElement: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".add-task")!;
//     const tasksList: HTMLUListElement = document.querySelectorAll(".tasks-list");
//     const newTaskInputElement: HTMLInputElement = document.querySelectorAll(".get-new-task");




//     addTaskButtonElement.forEach((button) => {

//     })
// }