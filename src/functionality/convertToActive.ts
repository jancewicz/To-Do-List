import { overviewsContainer } from "../render-functions/renderNewProjectOverview";

export const toggleProjectState = (): void => {
    overviewsContainer.addEventListener("click", (event: Event) => {
        const target = event.target as HTMLElement;

        if (target.className === "project-overview") {
            const projectsList: Element[] = [...document.querySelectorAll(".project-overview")];
            const projectIndex = projectsList.indexOf(target);
            if (projectIndex !== -1) {

                const overviewList: NodeListOf<Element> = document.querySelectorAll(".project-overview")!;
                overviewList.forEach((overview: Element) => {
                    overview.addEventListener("click", () => {
                        overview.classList.toggle("project-overview-active");

                    });
                });
                console.log(`BE`);
            }
        }
    })

}

document.addEventListener("click", (event) => {
    const activeProjectElements: NodeListOf<HTMLElement> = document.querySelectorAll(".project-overview-active");
    activeProjectElements.forEach((activeProject: HTMLElement) => {
        if (!activeProject.contains(event.target as Node)) {
            activeProject.classList.remove("project-overview-active");
            activeProject.classList.add("project-overview");
        }
    });
});