export class BookState {
    public currentService: number[];
    public currentBarber: number;
    public curentDate: Date;

    constructor(
        currentService: number[],
        currentBarber: number,
        curentDate: Date,
    ) {
        this.currentService = currentService;
        this.currentBarber = currentBarber;
        this.curentDate = curentDate;
    }
}