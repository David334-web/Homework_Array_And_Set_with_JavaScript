/*let ecole = [
    "Richardson",
    "Merlyn",
    "Mahalia",
    "Michel",
    "Merline"
];

console.log(ecole[3]);
console.log(ecole.length);
//console.log(ecole[ecole.length - 1]);

//let newArray = ecole.shift();
//console.log(newArray);

let addName = ecole.push("Jean");
let sliceArray = ecole.slice(0, 3);
console.log(sliceArray);

console.log(ecole.indexOf("Michel"));

function include(){
    if(ecole.includes("Michel")){
        console.log("He is a teacher")
    }else{
        console.log("We do not find Michel")
    }
}

include();

ecole.push("Merline");
let otherName = ecole.find((element) => element === "Merline");
console.log(otherName);

let otherNameFilter = ecole.filter((element) => element === "Merline");
console.log(otherNameFilter);
*/


let pays = new Set([
    "Haiti",
    "Canada",
    "USA",
    "France"
]);

pays.add("Allemagne");
console.log(pays.size);
//console.log(pays);

pays.forEach((element) => {
    console.log(element)
})

console.log(pays.delete("Allemagne"));
console.log(pays);