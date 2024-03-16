import { Project } from "../classes/project";
import { selectCategory } from "..";
import { Category } from "../classes/project";

export const rendertrashBinIcon = () => {
    const trashbinIcon: HTMLImageElement = document.createElement("img");
    trashbinIcon.setAttribute("src", "images/trashbin.svg");
    trashbinIcon.classList.add("trashbin-icon");
    trashbinIcon.setAttribute("alt", "trashbin-icon");

    return trashbinIcon;
}

export const renderNewProject = () => {
    const selectedCategory: Category = selectCategory();

    const projectsOverview: HTMLElement = document.querySelector(".grid-element-2")!;
    const projectNameInput: HTMLInputElement = document.querySelector("#task-input")!;

    let newProject: Project = new Project(projectNameInput.value, selectedCategory, new Date());

    const newProjectELement: HTMLElement = document.createElement("div");
    newProjectELement.classList.add("category-list-element");

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
    console.log(newProject);
}