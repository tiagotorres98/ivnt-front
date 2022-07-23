export class Address {
    private street:String;
    private city:String
    private number:Number;
    private district:String;
    private postalCode:String;

    public getDistrict(): String {
        return this.district;
    }

    public setDistrict(district: String): void {
        this.district = district;
    }

    public getStreet(): String {
        return this.street;
    }

    public setStreet(street: String): void {
        this.street = street;
    }

    public getCity(): String {
        return this.city;
    }

    public setCity(city: String): void {
        this.city = city;
    }

    public getNumber(): Number {
        return this.number;
    }

    public setNumber(number: Number): void {
        this.number = number;
    }

    public getPostalCode(): String {
        return this.postalCode;
    }

    public setPostalCode(postalCode: String): void {
        this.postalCode = postalCode;
    }


    constructor(){
        this.street='';
        this.city=''
        this.number=0;
        this.postalCode='';
        this.district = '';
    }
}
