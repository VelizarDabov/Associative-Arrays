function solve(input){

let map = new Map();

for(let word of input){
   let count = 1;
    if(!map.has(word)){
        
        map.set(word, count)
    }else{
        map.set(word, map.get(word) +1);
    }
}
let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
for(let kvp of sorted){
    console.log(`${kvp[0]} -> ${kvp[1]} times`);
}

}
solve(["dog", "dog", "city", "dog", "dad",

"boys", "ginger"])