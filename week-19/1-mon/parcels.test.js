import { Parcel } from "./parcels";
const parcel = new Parcel("Shoes", "42 Wallaby Way, Sydney");
const parcelTwo = new Parcel("Socks", "Yolo, Melbourne");

test('label printed correctly', () => {
    expect(parcel.address).toBe("42 Wallaby Way, Sydney");
});

test('tracking history present', () => {
    parcel.processPackage("Shipping information received");
    parcel.processPackage("Package processed at SYDNEY depot");
    expect(parcel.trackingHistory()).toStrictEqual([
        'Shipping information received',
        'Package processed at SYDNEY depot'
    ]);
});

test('two parcels tracking history kept separate', () => {
    parcel.processPackage("Shipping information received");
    parcel.processPackage("Package processed at SYDNEY depot");
    parcelTwo.processPackage("Shipping information received");
    parcelTwo.processPackage("Package processed at MELBOURNE depot");
    expect(parcel.trackingHistory()).not.toBe(parcelTwo.trackingHistory());
});