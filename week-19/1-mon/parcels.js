export class Parcel {
    arr = [];
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    getLabel() {
        console.log(`Deliver to: ${this.address}, Package contains: ${this.name}`);
    };
    processPackage(progress) {
        this.arr.push(progress);
    };
    trackingHistory() {
        return this.arr;
    };
}