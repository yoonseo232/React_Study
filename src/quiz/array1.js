
let lst = [ { id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "Paul" } ]
// let newLst = [...lst];

// for(const item of lst){
//     newLst.push(item);
// }

// newLst.splice(1, 1);


let newLst = [...lst];

for(const item of lst){
    newLst.push(item);
}

let newObj = {};
newObj.id = lst[1].id;
newObj.name = "Smith"

console.log(lst);
console.log(newLst);
console.log(lst === newLst);
console.log(lst[1]);
console.log(newLst[1]);
console.log(lst[1] === newLst[1]);

