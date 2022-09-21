import { Parcel } from "./parcels";
const parcel = new Parcel("Shoes", "42 Wallaby Way, Sydney");
const parcelTwo = new Parcel("Socks", "Yolo, Melbourne");
const parcelThree = new Parcel("Clothes", "Beach, Brisbane");
const parcelFour = new Parcel("Hat", "Desert sand");

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

test('check tracking history for delivered parcel', () => {
    parcelThree.processPackage("Shipping information received");
    parcelThree.processPackage("Package processed at BRISBANE depot");
    parcelThree.processPackage("Package delivered to recipient");
    expect(parcelThree.trackingHistory()).toStrictEqual([
        'Shipping information received',
        'Package processed at BRISBANE depot',
        'Processing Complete. Parcel Delivered.'
    ]);
});

test('ensure no more tracking info gets added after parcel is delivered', () => {
    parcelFour.processPackage("Shipping information received");
    parcelFour.processPackage("Package processed at PERTH depot");
    parcelFour.processPackage("Package delivered to recipient");
    parcelFour.processPackage("Adding more tracking info");
    expect(parcelFour.trackingHistory()).toStrictEqual([
        'Shipping information received',
        'Package processed at PERTH depot',
        'Processing Complete. Parcel Delivered.'
    ]);
});