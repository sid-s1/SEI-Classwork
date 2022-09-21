export class Parcel {
    arr = [];
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    getLabel() {
        console.log(`Deliver to: ${this.address}, Package contains: ${this.name}`);
    };
    checkDelivery(progress) {
        return progress.includes('delivered')
    }
    processPackage(progress) {
        if (!this.arr.includes('Processing Complete. Parcel Delivered.')) {
            if (!this.checkDelivery(progress)) {
                this.arr.push(progress);
            }
            else {
                this.arr.push('Processing Complete. Parcel Delivered.');
            }
        }
    };
    trackingHistory() {
        return this.arr;
    };
}