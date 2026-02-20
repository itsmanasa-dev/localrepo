let items=[100,200,300,400];
let ind=0;
for (let val of items){
    console.log(`value at index ${ind}=${val}`);
    let offer=val/10;
    items[ind]+=offer;
    console.log(`value after offer applied=${offer}`);
}