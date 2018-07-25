export class Services {
    public title: string;
    public price: number;
    public duration: number;
    public description: string

    constructor(title: string,
        price: number,
        duration: number,
        description: string) {
            this.title = title;
            this.price = price;
            this.duration = duration;
            this.description = description; 

    }
}