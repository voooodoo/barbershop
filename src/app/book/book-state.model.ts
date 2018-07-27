export class BookState {
    public currentService: Number[];
    public currentBarber: Number;
    public curentDate: Date;

    constructor(
        currentService: Number[],
        currentBarber: Number,
        curentDate: Date,
    ) {
        this.currentService = currentService;
        this.currentBarber = currentBarber;
        this.curentDate = curentDate;
    }
}