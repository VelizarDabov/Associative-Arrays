function addressBook(input) {
    let adressOutput = {};

    for (const line of input) {
        let [name, address] = line.split(':');
        adressOutput[name] = address;
    }
    for (let [name, address] of Object.entries(adressOutput).sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(`${name} -> ${address}`);
    }
}
addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])