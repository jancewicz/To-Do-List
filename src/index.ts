import './style.css';
import { Category } from './classes/project';
import { renderNewProject, rendertrashBinIcon, removeProjectFromContainer } from './render-functions/renderNewProject';
import { renderNewProjectOverview } from './render-functions/renderNewProjectOverview';



const submitFormButton = document.getElementById("submit-project-button") as HTMLButtonElement | null;
const projectOverviewList: NodeListOf<HTMLElement> = document.querySelectorAll(".project-overview");

const categories: Category[] = [
    Category.GENERAL,
    Category.WORK,
    Category.SPORT,
    Category.LEISURE
];


export const selectCategory = () => {
    let selectedCategory: Category = Category.GENERAL;
    const categoryCheckboxElement: HTMLInputElement = document.querySelector(".checkbox-input-category")!;

    switch (categoryCheckboxElement.value) {
        case "general":
            selectedCategory = Category.GENERAL;
            break;
        case "work":
            selectedCategory = Category.WORK;
            break;
        case "leisure":
            selectedCategory = Category.LEISURE;
            break;
        case "sport":
            selectedCategory = Category.SPORT;
            break;
    }
    return selectedCategory;
};


if (submitFormButton) {
    submitFormButton.addEventListener("click", (event: Event) => {
        event.preventDefault();
        renderNewProject();
    })
};


removeProjectFromContainer();
renderNewProjectOverview();








