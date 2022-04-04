// let array =[1,2,3,4,5,6]
// for (let i = array.length-1;i>=0;i--){
//     console.log(array[i])
// }
// array.forEach(item =>{
//     console.log(item)
// })
// for (let i = array.length;i>0;i--){
//     console.log(i)

// console.log(array.length)Vòng lặp foreach là một cấu trúc điều khiển để duyệt qua các mục trong một mảng hoặc một bộ sưu tập.————————————————————————let array = [1,2,3,4,5]
// const obj_1 = {
//     username: "chamdev.com",
//     getUsername() {
//         return this.username;
//     }
// };
//
// const obj_2 = {...obj_1};
//
// obj_1.age = 10;
//
// console.log("obj_2", obj_2);
// console.log("obj_2", obj_1.age);
// const obj_1 = {
//     username: "chamdev.com",
//     info: {
//         address: "https://chamdev.com"
//     }
// };
//
// const obj_2 = {...obj_1 };
//
// obj_1.age = 10;
// obj_1.info.address = "Not found";
//
// console.log("obj_2", obj_2); // {username: "chamdev.com", info: {address: "Not found"}}
JSON.parse(
    JSON.stringify({
        a: new Date(),
        b: NaN,
        c: new Function(),
        d: undefined,
        e: function() {},
        f: Number,
        g: false,
        h: Infinity
    })
)