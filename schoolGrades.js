function grades(input){
let map = new Map();

for(let line of input){
    let tokens = line.split(' ');
    let name = tokens.shift();
    let grades = tokens.map(Number);

    if(!map.has(name)){
        map.set(name, []); 
    }
    for(let grade of grades)
        map.get(name).push(grade);
    }
let sorted = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
for(let kvp of sorted){
    const average = kvp[1].reduce((a, b) => a + b, 0) / kvp[1].length;
    const result = average;

console.log(`${kvp[0]}: ${(result).toFixed(2)}`);
   
}
}
grades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'])