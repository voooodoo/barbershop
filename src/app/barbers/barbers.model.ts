export class Barbers {
    public id: number;
    public rating: number;
    public services: number[];
    public name: string;
    public image: string;
    public bio: string;

    constructor( 
        id:number,
        rating: number,
        services: number[],
        name: string,
        image: string, 
        bio: string) {
            this.id = id;
            this.rating = rating;
            this.services = services;
            this.name = name;
            this.image = image;
            this.bio = bio;
    }
}