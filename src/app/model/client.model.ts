import { Address } from "./address.model";

export class Client {
    
    private name:String;
    private phone:String;
    private phone2:String;
    private cpf:String;
    private address:Address;
    
    constructor(){
        this.name = "";
        this.phone  = "";
        this.phone2  = "";
        this.cpf  = "";
        this.address = new Address();
    }

    public getAddress(): Address {
        return this.address;
    }

    public setAddress(address: Address): void {
        this.address = address;
    }

    public getName(): String {
        return this.name;
    }

    public setName(name: String): void {
        this.name = name;
    }

    public getPhone(): String {
        return this.phone;
    }

    public setPhone(phone: String): void {
        this.phone = phone;
    }

    public getPhone2(): String {
        return this.phone2;
    }

    public setPhone2(phone2: String): void {
        this.phone2 = phone2;
    }

    public getCpf(): String {
        return this.cpf;
    }

    public setCpf(cpf: String): void {
        this.cpf = cpf;
    }
}
