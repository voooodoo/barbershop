export class Order {
    public currentService: Number[];
    public currentBarber: Number;
    public currentDate: Date;

    constructor(
        currentService: Number[],
        currentBarber: Number,
        currentDate: Date,
    ) {
        this.currentService = currentService;
        this.currentBarber = currentBarber;
        this.currentDate = currentDate;
    }
}