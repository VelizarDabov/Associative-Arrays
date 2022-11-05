function companyUser(input){

    let result = {};

    input.forEach(line => {
        let [companyName, personID] = line.split(' -> ');
        if(!result.hasOwnProperty(companyName)){
            result[companyName] = [];
        }
        result[companyName].push(personID)
    });

let sortedCompanies = Object.entries(result).sort((a,b) => a[0].localeCompare (b[0]));

sortedCompanies.forEach(el => {

const companyName = el[0];
const allIDs = el[1];
console.log(companyName);

let uniqueID = new Set(allIDs);

for (const id of uniqueID) {
    console.log(`-- ${id}`);
}
})


}
companyUser([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])