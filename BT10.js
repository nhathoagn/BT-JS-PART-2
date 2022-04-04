// Thừa vì promies settimeout luôn resolve
async  function waitAndbeReject(){
    await new Promise( (r) => setTimeout(r,1000));
    // throw  Error("This is error");
}
// Đúng
async  function test1(){
    try {
        return await waitAndbeReject();
    } catch (e) {
        return "Oh No!";
    }
}
// Sai, vì throw đặt sai vị trí b
async function test2(){
    try{
        return await waitAndbeReject();
    } catch (e) {
        throw e;
    }
}
//thừa, vì có thể bỏ return mà kết quả của hàm không thay đổi
async function test3(){
    return await waitAndbeReject()
}
//Đúng
function test4() {
    return waitAndbeReject()
}
const main = async () => {
  const value = await test4()
    console.log('value', value);
}
main();