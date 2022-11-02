function piccolo(input) {
    let parking = [];

    for (let line of input) {
        let [direction, carNumber] = line.split(', ');

        if (direction === 'IN') {
            if (!parking.includes(carNumber)) {
                parking.push(carNumber);
            }
        } else if (direction === 'OUT') {
            if (parking.includes(carNumber)) {
                let index = parking.indexOf(carNumber);
                parking.splice(index, 1)
            }
        }
    }
    if (parking.length > 0) {
        let sorted = parking.sort((a, b) => a.localeCompare(b));
        for (let carNum of sorted) {
            console.log(carNum);
        }
    } else {
        console.log(`Parking Lot is Empty`);
    }
}

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])