import { Parcel } from "./parcels";

export class Depot {
    constructor(name) {
        this.name = name;
    }
    receiveParcel(parcel) {
        parcel.processPackage(`${this.name} received the parcel`);
    }
    removeParcel(parcel) {

    }
}
const parcel = new Parcel("shoes", "42 Wallaby Way, Sydney");
const depot = new Depot("Sydney");
depot.receiveParcel(parcel);
depot.removeParcel(parcel);