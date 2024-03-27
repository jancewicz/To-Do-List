import { overviewsContainer } from "./renderNewProjectOverview";

const dropdownToggle: HTMLElement = document.querySelector('.dropdown-toggle')!;
const dropdownMenu: HTMLElement = document.querySelector('.dropdown-menu')!;


export const renderDropDown = (): HTMLElement => {

    const dropdownContainer: HTMLElement = document.createElement("div");
    dropdownContainer.classList.add("priority-dropdown");

    const buttonDropdownElement: HTMLButtonElement = document.createElement("button");
    buttonDropdownElement.classList.add("dropdown-toggle-select");

    const selectedDiv: HTMLElement = document.createElement("div");
    selectedDiv.classList.add("selected");
    selectedDiv.innerText = "";

    const caret: HTMLElement = document.createElement("div");
    caret.classList.add("caret");

    buttonDropdownElement.appendChild(selectedDiv);
    buttonDropdownElement.appendChild(caret);

    const optionsListContainer: HTMLUListElement = document.createElement("ul");
    optionsListContainer.classList.add("dropdown-options");

    for (let i = 0; i < 3; i++) {
        const dropdownListOption: HTMLLIElement = document.createElement("li");
        dropdownListOption.setAttribute("id", `"dropdown-option-${i + 1}"`);
        dropdownListOption.innerText = `${i + 1}`;
        optionsListContainer.appendChild(dropdownListOption);
    };


    dropdownContainer.appendChild(buttonDropdownElement);
    dropdownContainer.appendChild(optionsListContainer);

    return dropdownContainer;
}

export const dropdownFunctionality = () => {
    overviewsContainer.addEventListener("click", (event: Event) => {
        const target = event.target as HTMLElement;

        if (target.closest(".priority-dropdown")) {

            const dropdownContainer = target.closest(".priority-dropdown") as HTMLElement;
            if (dropdownContainer) {
                const dropdownButton = dropdownContainer.querySelector(".dropdown-toggle-select")!;
                const menu = dropdownContainer.querySelector(".dropdown-options")!;
                const caret = dropdownContainer.querySelector(".caret")!;

                dropdownButton.classList.toggle("dropdown-toggle-clicked");
                menu.classList.toggle("menu-open");
                caret.classList.toggle("caret-rotate");
            }
        }

        if (target.tagName === "LI" && target.closest(".dropdown-options")) {
            const option = target as HTMLElement;
            const dropdownContainer = option.closest(".priority-dropdown") as HTMLElement;
            if (dropdownContainer) {
                const dropdownButton = dropdownContainer.querySelector(".dropdown-toggle-select")!;
                const menu = dropdownContainer.querySelector(".dropdown-options")!;
                const options = dropdownContainer.querySelectorAll(".dropdown-options li")!;

                applyPriorityToProject();


                dropdownButton.classList.remove("dropdown-toggle-clicked");
                menu.classList.remove("menu-open");

                options.forEach((opt) => {
                    opt.classList.remove("active");
                });
                option.classList.add("active");
            }
        }
    });

    document.addEventListener("click", (event: Event) => {
        const target = event.target as HTMLElement;
        const dropdownContainers = document.querySelectorAll(".priority-dropdown");
        dropdownContainers.forEach((dropdownContainer) => {
            const dropdownButton = dropdownContainer.querySelector(".dropdown-toggle-select")!;
            const menu = dropdownContainer.querySelector(".dropdown-options")!;
            if (!dropdownContainer.contains(target)) {
                dropdownButton.classList.remove("dropdown-toggle-clicked");
                menu.classList.remove("menu-open");
            }
        });
    });
}

const applyPriorityToProject = (): void => {

    const priorityDropdowns = document.querySelectorAll('.priority-dropdown');

    overviewsContainer.addEventListener("click", (event: Event) => {
        priorityDropdowns.forEach((dropdown: Element) => {

            if (dropdown.contains(event.target as Node)) {

                if ((event.target as Element).classList.contains('dropdown-options')) {

                    const selectedOption: string = (event.target as Element).textContent!;
                    (dropdown.querySelector('.selected') as Element).textContent = selectedOption;
                }
            }
        });
    })
}