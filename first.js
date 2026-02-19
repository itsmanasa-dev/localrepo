let arr=[87,97,44,37,76,60]
let sum=0;
for(let val of arr){
    sum+=val;
}
let avg=sum/arr.length;
console.log(`Sum of the marks=${sum}`);
console.log(`Average marks of the class=${avg}`);
