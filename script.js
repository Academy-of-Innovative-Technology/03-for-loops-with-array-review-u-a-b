let arrayItems = ["Apple", "Banana", "Cherry", "Dragonfruit", "Pear", "Watermelon", "Grapes"];
let result = document.querySelector("#output");
let display = document.querySelector("#arrayDisplay");
let input = document.querySelector("#addValue");
//let value = input.value;

let newArray = [];
let commas = arrayItems.forEach((fruit) => newArray.push(fruit + ", "));
for (let fruit of newArray){
 display.insertAdjacentHTML("beforeend", fruit);
}

function showArray(){
        display.innerHTML = "";
    let showNewArray = [];
    let spaces = arrayItems.forEach((fruits) => showNewArray.push(fruits + ", "));
    for (let fruit of showNewArray){
display.insertAdjacentHTML("beforeend", fruit);
result.innerHTML = "Forward: Apple Banana Cherry Dragonfruit Pear Watrmelon Grapes";
    }
}

function showReverse(){
    display.innerHTML = "";
     let showNewArray = [];
    let spaces = arrayItems.forEach((fruits) => showNewArray.push(fruits + ", "));
      let reverse = showNewArray.reverse();
 for (let fruit of reverse){
display.insertAdjacentHTML("beforeend", fruit);
result.innerHTML = "Reverse: Grapes Watermelon Pear Dragonfruit Cherry Banana Apple";
    }
}                                              

function addUnshift(){
    display.innerHTML = "";
   let showNewArray = [];
    let spaces = arrayItems.forEach((fruits) => showNewArray.push(fruits + ", "));
    showNewArray.unshift(input.value);
    for (let fruit of showNewArray){
display.insertAdjacentHTML("beforeend", fruit);
result.innerHTML = "Unshifted " + input.value + " to the start of the array";
    }
}

function addPush(){
    display.innerHTML = "";
   let showNewArray = [];
    let spaces = arrayItems.forEach((fruits) => showNewArray.push(fruits + ", "));
    showNewArray.push(input.value);
    for (let fruit of showNewArray){
display.insertAdjacentHTML("beforeend", fruit);
result.innerHTML = "Pushed " + input.value + " to the end of the array";
    }
}

function removeShift(){
    display.innerHTML = "";
   let showNewArray = [];
    let spaces = arrayItems.forEach((fruits) => showNewArray.push(fruits + ", "));
    showNewArray.shift();
    for (let fruit of showNewArray){
display.insertAdjacentHTML("beforeend", fruit);
result.innerHTML = "Shifted (removed first): Apple";
    }
}

function removePop(){
    display.innerHTML = "";
   let showNewArray = [];
    let spaces = arrayItems.forEach((fruits) => showNewArray.push(fruits + ", "));
    showNewArray.pop();
    for (let fruit of showNewArray){
display.insertAdjacentHTML("beforeend", fruit);
result.innerHTML = "Popped (removed last): Grapes";
    }
}


