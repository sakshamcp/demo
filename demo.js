const a = ()=>{
    console.log('Hello World');
}
console.log("heyyy")
const b = ()=>{
    a();
}
const list = ["orange", "apple", "banana"];
list.forEach((item)=>{
    console.log(item);
})
b();
a();