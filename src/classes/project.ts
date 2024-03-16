export class Project {

    name: string;
    category?: Category;
    createdAt: Date;

    constructor(
        name: string,
        category: Category = Category.GENERAL,
        createdAt: Date,
    ) {
        this.name = name;
        this.category = category;
        this.createdAt = new Date();
    }
}

export enum Category {
    GENERAL = "general",
    WORK = "work",
    SPORT = "sport",
    LEISURE = "leisure",
};  