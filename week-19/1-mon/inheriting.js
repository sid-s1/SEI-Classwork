import { Parcel } from './parcels.js';

const myParcel = new Parcel("shoes", "42 Wallaby Way, Sydney");
myParcel.getLabel();
myParcel.processPackage("Shipping information received");
myParcel.processPackage("Package processed at SYDNEY depot");
myParcel.trackingHistory();
