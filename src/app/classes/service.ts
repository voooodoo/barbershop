export class Service {
    public id: number;
    public title: string;
    public price: number[];
    public duration: number;
    public description: string

    constructor(
        id: number,
        title: string,
        price: number[],
        duration: number,
        description: string) {
            this.id = id,
            this.title = title;
            this.price = price;//[]
            this.duration = duration;
            this.description = description; 

    }
}