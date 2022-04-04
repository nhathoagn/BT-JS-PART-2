const controller  = async (req,res) => {
    const timeStart = Date.now()
            doA();
    await  doB();
    res.status(200).end();
}
function doA() {

}
controller()
