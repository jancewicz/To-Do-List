class Task {

    title: string;
    priority: number;
    dueTo: Date;

    constructor(
        title: string,
        priority: number,
        dueTo: Date
    ) {
        this.title = title;
        this.priority = priority;
        this.dueTo = dueTo;
    }
}